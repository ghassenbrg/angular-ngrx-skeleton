import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountStoreActions, AccountStoreSelectors, AppStoreState } from 'src/app/app-store';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]>;
  error$: Observable<String>;

  constructor(private store: Store<AppStoreState.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new AccountStoreActions.LoadAccounts());
    this.accounts$ = this.store.pipe(select(AccountStoreSelectors.getAccounts));
    this.error$ = this.store.pipe(select(AccountStoreSelectors.getError));
  }

  deleteAccount(account: Account) {
    if(confirm("Are you sure you want to delete the line ?")){
      this.store.dispatch(new AccountStoreActions.DeleteAccount(account.id));
    }
  }

  editAccount(account: Account) {
    this.store.dispatch(new AccountStoreActions.LoadAccount(account.id));
  }
}
