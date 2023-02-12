import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { AccountService } from "../../services/account.service";
import { Account } from "../../models/account.model";
import * as accountActions from "./actions";


@Injectable()
export class AccountStoreEffects {
     
    constructor(
        private actions$: Actions,
        private accountService: AccountService
    ) { }

    loadAccounts$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<accountActions.LoadAccounts>(
            accountActions.AccountActionTypes.LOAD_ACCOUNTS
        ),
        mergeMap((actions: accountActions.LoadAccounts) => 
            this.accountService.getAccounts().pipe(
                map(
                    (accounts: any) => 
                        new accountActions.LoadAccountsSuccess(accounts.data)
                ),
                catchError(err => of(new accountActions.LoadAccountsFail(err)))
            )
        )
    ));

    loadAccount$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<accountActions.LoadAccount>(
            accountActions.AccountActionTypes.LOAD_ACCOUNT
        ),
        mergeMap((action: accountActions.LoadAccount) => 
            this.accountService.getAccountById(action.payload).pipe(
                map(
                    (account: any) => 
                        new accountActions.LoadAccountSuccess(account.data)
                ),
                catchError(err => of(new accountActions.LoadAccountFail(err)))
            )
        )
    ));

    createAccount$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<accountActions.CreateAccount>(
            accountActions.AccountActionTypes.CREATE_ACCOUNT
        ),
        map((action: accountActions.CreateAccount) => action.payload),
        mergeMap((account: Account) => 
            this.accountService.createAccount(account).pipe(
                map(
                    (newAccount: any) => 
                        new accountActions.CreateAccountSuccess(newAccount)
                ),
                catchError(err => of(new accountActions.CreateAccountFail(err)))
            )
        )
    ));

    updateAccount$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<accountActions.UpdateAccount>(
            accountActions.AccountActionTypes.UPDATE_ACCOUNT
        ),
        map((action: accountActions.UpdateAccount) => action.payload),
        mergeMap((account: Account) => 
            this.accountService.updateAccount(account).pipe(
                map(
                    (updatedAccount: any) => 
                        new accountActions.UpdateAccountSuccess({
                            id: updatedAccount.data.id,
                            changes: updatedAccount
                        })
                ),
                catchError(err => of(new accountActions.UpdateAccountFail(err)))
            )
        )
    ));

    deleteAccount$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<accountActions.DeleteAccount>(
            accountActions.AccountActionTypes.DELETE_ACCOUNT
        ),
        map((action: accountActions.DeleteAccount) => action.payload),
        mergeMap((id: number) => 
            this.accountService.deleteAccount(id).pipe(
                map(() => new accountActions.DeleteAccountSuccess(id)),
                catchError(err => of(new accountActions.DeleteAccountFail(err)))
            )
        )
    ));
}