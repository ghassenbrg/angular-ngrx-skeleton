import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "accounts",
    loadChildren: () => import('../app/containers/accounts/accounts.module').then(m => m.AccountsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
