import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const accountRoutes: Routes = [{ path: "", component: AccountComponent}]

@NgModule({
  declarations: [AccountComponent, AccountAddComponent, AccountListComponent, AccountEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(accountRoutes)
  ]
})
export class AccountsModule { }
