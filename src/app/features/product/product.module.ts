import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../../shared/store/product.effects';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent, FirstNamePipe],
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
export class ProductModule {}
