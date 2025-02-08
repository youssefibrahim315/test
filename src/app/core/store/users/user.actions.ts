import { createActionGroup, props } from '@ngrx/store';

// Define all actions for user feature
export const UserActions = createActionGroup({
  source: 'User',
  events:{
    changeCurrentPage: (CurrentPage: number) => ({ CurrentPage }),
    changeItemsPerPage: (ItemsPerPage: number) => ({ ItemsPerPage }),

    login: (data: any) => ({ data }),
    loginSuccess: (data: any) => ({ data }),
    loginFailure: (errors: string[]) => ({ errors }),


    getUserDetails: (param: any) => ({ ...param }),
    getUserDetailsSuccess: (data: any,email: string) => ({ data , email }),
    getUserDetailsFailure: (errors: string[]) => ({ errors }),

  }


});
