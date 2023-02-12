import { accountAdapter, initialState, AccountState } from './state';
import * as accountActions from "./actions";


export function AccountReducer(state = initialState, action: accountActions.Actions) : AccountState {
    switch(action.type){
        case accountActions.AccountActionTypes.LOAD_ACCOUNTS_SUCCESS: {
            return accountAdapter.setAll(action.payload, {
                ...state,
                loading: false,
                loaded: true,
            })
        }
        case accountActions.AccountActionTypes.LOAD_ACCOUNTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case accountActions.AccountActionTypes.LOAD_ACCOUNT_SUCCESS: {
            return accountAdapter.addOne(action.payload, {
                ...state,
                selectedAccountId: action.payload.id
            })
        }
        case accountActions.AccountActionTypes.LOAD_ACCOUNT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case accountActions.AccountActionTypes.CREATE_ACCOUNT_SUCCESS: {
            return accountAdapter.addOne(action.payload, state)
        }
        case accountActions.AccountActionTypes.CREATE_ACCOUNT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case accountActions.AccountActionTypes.UPDATE_ACCOUNT_SUCCESS: {
            return accountAdapter.updateOne(action.payload, state)
        }
        case accountActions.AccountActionTypes.UPDATE_ACCOUNT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case accountActions.AccountActionTypes.DELETE_ACCOUNT_SUCCESS: {
            return accountAdapter.removeOne(action.payload, state)
        }
        case accountActions.AccountActionTypes.DELETE_ACCOUNT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}