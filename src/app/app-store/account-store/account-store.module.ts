import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountStoreEffects } from './effects';
import { AccountReducer } from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('accounts', AccountReducer),
    EffectsModule.forFeature([AccountStoreEffects])
  ]
})
export class AccountStoreModule { }
