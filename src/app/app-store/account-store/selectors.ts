import { createFeatureSelector, createSelector } from "@ngrx/store";
import { accountAdapter, AccountState } from './state';


const getAccountFeatureState = createFeatureSelector<AccountState>(
    "accounts"
)

export const getAccounts = createSelector(
    getAccountFeatureState,
    accountAdapter.getSelectors().selectAll
)

export const getAccountsLoading = createSelector(
    getAccountFeatureState,
    (state: AccountState) => state.loading
)

export const getAccountsLoaded = createSelector(
    getAccountFeatureState,
    (state: AccountState) => state.loaded
)

export const getError = createSelector(
    getAccountFeatureState,
    (state: AccountState) => state.error
)

export const getCurrentAccountId = createSelector(
    getAccountFeatureState,
    (state: AccountState) => state.selectedAccountId
)

export const getCurrentAccount = createSelector(
    getAccountFeatureState,
    getCurrentAccountId,
    state => state.entities[state.selectedAccountId]
)