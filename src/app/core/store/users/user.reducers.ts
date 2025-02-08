import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

// Define the initial state
export interface State {
  id: number;
  displayName: string;
  email: string;
}

export const initialState: State = {
  id: 0,
  displayName: '',
  email: ''
};

export const userFeature = createFeature({
  name: 'userFeature',
  reducer: createReducer(
    initialState,
    on(UserActions.getUserDetails, (state, data) => ({
      ...state,
    })),
    on(UserActions.getUserDetailsSuccess, (state, { data, email }) => ({
      ...state,
      data: data.filter((user: any) => user.email === email),
      loading: false,
    })),
    on(UserActions.getUserDetailsFailure, (state, error) => ({
      ...state,
      error,
    })),

    on(UserActions.login, (state, { data }) => ({
      ...state,
      loading: true,
    })),
    on(UserActions.loginSuccess, (state, { data }) => ({
      ...state,
      data: data,
      loading: false,
    })),
    on(UserActions.loginFailure, (state, { errors }) => ({
      ...state,
      loading: false,
      errors: errors,
    }))
  ),
});

export const { name, reducer, selectDisplayName, selectId, selectEmail } =
  userFeature;
