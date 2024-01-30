import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/condidate/dashboard_condidate', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    { path: '/condidate/offers', title: 'offers',  icon:'pe-7s-user', class: '' },
     {path: '/condidate/profile',title:'profile',icon:'pe-7s-user',class:''},
    {path:'condidate/apply',title:'apply',icon:'pe-7s-graph',class:''}


];

@Component({
  selector: 'app-Sidebar_condidater',
  templateUrl: './sidebar_condidater.html'
})
export class Sidebar_condidater implements OnInit {
  menuItems: any[];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
