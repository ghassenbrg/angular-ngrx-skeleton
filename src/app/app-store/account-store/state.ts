import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Account } from "../../models/account.model";


export interface AccountState extends EntityState<Account> {
    selectedAccountId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const accountAdapter: EntityAdapter<Account> = createEntityAdapter<Account>();

export const defaultAccount: AccountState = {
    ids: [],
    entities: {},
    selectedAccountId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = accountAdapter.getInitialState(defaultAccount)