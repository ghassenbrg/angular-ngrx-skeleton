import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Account } from "../../models/account.model";


export enum AccountActionTypes {
    LOAD_ACCOUNTS = "[Account] Load Accounts",
    LOAD_ACCOUNTS_SUCCESS = "[Account] Load Accounts Success",
    LOAD_ACCOUNTS_FAIL = "[Account] Load Accounts Fail",

    LOAD_ACCOUNT = "[Account] Load Account",
    LOAD_ACCOUNT_SUCCESS = "[Account] Load Account Success",
    LOAD_ACCOUNT_FAIL = "[Account] Load Account Fail",

    CREATE_ACCOUNT = "[Account] Create Account",
    CREATE_ACCOUNT_SUCCESS = "[Account] Create Account Success",
    CREATE_ACCOUNT_FAIL = "[Account] Create Account Fail",

    UPDATE_ACCOUNT = "[Account] Update Account",
    UPDATE_ACCOUNT_SUCCESS = "[Account] Update Account Success",
    UPDATE_ACCOUNT_FAIL = "[Account] Update Account Fail",

    DELETE_ACCOUNT = "[Account] Delete Account",
    DELETE_ACCOUNT_SUCCESS = "[Account] Delete Account Success",
    DELETE_ACCOUNT_FAIL = "[Account] Delete Account Fail",
}

export class LoadAccounts implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNTS;
}

export class LoadAccountsSuccess implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNTS_SUCCESS;

    constructor(public payload: Account[]){}
}

export class LoadAccountsFail implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNTS_FAIL;

    constructor(public payload: string){}
}

export class LoadAccount implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNT;

    constructor(public payload: number){}
}

export class LoadAccountSuccess implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNT_SUCCESS;

    constructor(public payload: Account){}
}

export class LoadAccountFail implements Action {
    readonly type = AccountActionTypes.LOAD_ACCOUNT_FAIL;

    constructor(public payload: string){}
}

export class CreateAccount implements Action {
    readonly type = AccountActionTypes.CREATE_ACCOUNT;

    constructor(public payload: Account){}
}

export class CreateAccountSuccess implements Action {
    readonly type = AccountActionTypes.CREATE_ACCOUNT_SUCCESS;

    constructor(public payload: Account){}
}

export class CreateAccountFail implements Action {
    readonly type = AccountActionTypes.CREATE_ACCOUNT_FAIL;

    constructor(public payload: string){}
}

export class UpdateAccount implements Action {
    readonly type = AccountActionTypes.UPDATE_ACCOUNT;

    constructor(public payload: Account){}
}

export class UpdateAccountSuccess implements Action {
    readonly type = AccountActionTypes.UPDATE_ACCOUNT_SUCCESS;

    constructor(public payload: Update<Account>){}
}

export class UpdateAccountFail implements Action {
    readonly type = AccountActionTypes.UPDATE_ACCOUNT_FAIL;

    constructor(public payload: string){}
}

export class DeleteAccount implements Action {
    readonly type = AccountActionTypes.DELETE_ACCOUNT;

    constructor(public payload: number){}
}

export class DeleteAccountSuccess implements Action {
    readonly type = AccountActionTypes.DELETE_ACCOUNT_SUCCESS;

    constructor(public payload: number){}
}

export class DeleteAccountFail implements Action {
    readonly type = AccountActionTypes.DELETE_ACCOUNT_FAIL;

    constructor(public payload: string){}
}

export type Actions = LoadAccounts 
    | LoadAccountsSuccess 
    | LoadAccountsFail

    | LoadAccount 
    | LoadAccountSuccess 
    | LoadAccountFail 

    | CreateAccount 
    | CreateAccountSuccess 
    | CreateAccountFail 

    | UpdateAccount 
    | UpdateAccountSuccess 
    | UpdateAccountFail 

    | DeleteAccount 
    | DeleteAccountSuccess 
    | DeleteAccountFail;