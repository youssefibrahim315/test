import { createSelector } from '@ngrx/store';
import {
  selectDisplayName,
  selectEmail,
  selectId,
  userFeature,
} from './user.reducers';

export const selectUserDetails = createSelector(
  selectDisplayName,
  selectEmail,
  selectId,
  (displayName, email, id) => ({
    displayName,
    email,
    id,
  })
);
