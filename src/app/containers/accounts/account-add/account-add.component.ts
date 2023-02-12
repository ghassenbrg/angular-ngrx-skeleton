import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AccountStoreActions, AppStoreState } from 'src/app/app-store';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.sass']
})
export class AccountAddComponent implements OnInit {

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
  }

  createAccount() {
    const newAccount: Account = {
      firstname: this.accountForm.get("firstname").value,
      lastname: this.accountForm.get("lastname").value,
      email: this.accountForm.get("email").value,
    }

    this.store.dispatch(new AccountStoreActions.CreateAccount(newAccount));

    this.accountForm.reset();
  }


}
