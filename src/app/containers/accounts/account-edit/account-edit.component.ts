import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountStoreActions, AccountStoreSelectors, AppStoreState } from 'src/app/app-store';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.sass']
})
export class AccountEditComponent implements OnInit {

  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStoreState.State>
  ) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
    })

    const account$: Observable<Account> = this.store.select(
      AccountStoreSelectors.getCurrentAccount
    )

    account$.subscribe(currentAccount => {
      if(currentAccount){
        this.accountForm.patchValue({
          firstname: currentAccount.firstname,
          lastname: currentAccount.lastname,
          email: currentAccount.email
        });
      }
    })
  }

  updateAccount() {
    const updatedAccount: Account = {
      firstname: this.accountForm.get("firstname").value,
      lastname: this.accountForm.get("lastname").value,
      email: this.accountForm.get("email").value,
    }

    this.store.dispatch(new AccountStoreActions.UpdateAccount(updatedAccount))

    this.accountForm.reset();
  }

}
