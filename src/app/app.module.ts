import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppEffects, AppStore } from './core/store/store';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { INTERCEPTORS_PROVIDERS } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppStore, {}),
    EffectsModule.forRoot([...AppEffects]),

   ],
   providers: [provideHttpClient(),provideAnimations(),INTERCEPTORS_PROVIDERS] ,
   bootstrap: [AppComponent]
})
export class AppModule { }
