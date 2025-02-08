import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  AppStore } from './store/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(AppStore, {}),

  ],
  providers: [StoreModule,EffectsModule],
  exports: [StoreModule,EffectsModule],
})
export class CoreModule { }
