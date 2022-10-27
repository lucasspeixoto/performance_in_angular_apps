import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/modules/material.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/modules/shared.module';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from './base/base.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { environment } from '@envs/environment';
import { reducers } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './shared/store/product.effects';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  AppRoutingModule,
  LayoutModule,
  SharedModule,
  HttpClientModule,
  MaterialModule,
  EffectsModule.forRoot([ProductEffects]),
];

const PROVIDERS = [
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  {
    provide: MatDialogRef,
    useValue: {},
  },
];

const STORE = [
  StoreModule.forRoot(reducers),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
];

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [...MODULES, ...STORE],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
