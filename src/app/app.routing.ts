import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {SignUpConditateurComponent} from "./shared/Sign-up/sign-up-conditateur/sign-up-conditateur.component";
import {LoginComponent} from "./shared/login/login.component";
import {OffersListComponent} from "./shared/offers-list/offers-list.component";
import {CandidatesComponent} from "./shared/condidates/candidates.component";
import {CondidatesHomeComponent} from "./shared/condidates/condidates-home/condidates-home.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: 'condidate/dashboard_condidate',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'signup',
    component: SignUpConditateurComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: '',
    component: CandidatesComponent,
    children: [
      {
        path: 'condidate',
        loadChildren: () => import('./shared/condidates/condidate-layout.module').then(x => x.CondidateLayoutModule)
      }
    ]
  },
  {path:'home',
  component:CondidatesHomeComponent},

  {
    path: '**',
    redirectTo: 'condidate/dashboard_condidate'
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
