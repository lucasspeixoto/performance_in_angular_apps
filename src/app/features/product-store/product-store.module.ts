import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../../shared/store/product.effects';

const routes: Routes = [{ path: '', component: ProductStoreComponent }];

@NgModule({
  declarations: [ProductStoreComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [RouterModule],
})
export class ProductStoreModule {}
