import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './header/messages/messages.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { UserComponent } from './header/user/user.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/modules/shared.module';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule,
  SharedModule
];

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  NotificationsComponent,
  UserComponent,
  MessagesComponent,
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  providers: [],
})
export class LayoutModule {}
