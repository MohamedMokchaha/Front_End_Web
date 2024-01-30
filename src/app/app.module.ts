import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignUpConditateurComponent } from './shared/Sign-up/sign-up-conditateur/sign-up-conditateur.component';
import { LoginComponent } from './shared/login/login.component';
import { OffersListComponent } from './shared/offers-list/offers-list.component';
import { CandidatesComponent } from './shared/condidates/candidates.component';
import {Sidebar_condidaterModule} from "./shared/condidates/sidebar_condidater/sidebar_condidater.module";
import {Navbar_condidatorModule} from "./shared/condidates/navbar_condidator/navbar_condidator.module";
import { Header1Component } from './shared/header1/header1.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    Sidebar_condidaterModule,
    Navbar_condidatorModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CandidatesComponent,
    SignUpConditateurComponent,
    LoginComponent,
    Header1Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
