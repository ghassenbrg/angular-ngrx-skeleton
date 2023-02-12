import { createSelector } from '@ngrx/store';
import { AccountStoreSelectors } from './account-store';

export const selectError = createSelector(
    AccountStoreSelectors.getError,
    (error: string) => error
);

export const selectIsLoading = createSelector(
    AccountStoreSelectors.getAccountsLoading,
    (loading: boolean) => loading
);