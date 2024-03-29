import { Component, OnInit, ElementRef } from '@angular/core';
import {ROUTES} from "../sidebar_condidater/sidebar_condidater";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    // moduleId: module.id,
    selector: 'navbar_condidator-cmp',
    templateUrl: 'navbar_condidator.component.html'
})

export class Navbar_condidatorComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,
                private element: ElementRef,
                private router:Router,
                private authService:AuthenticationService) {
      this.location = location;
          this.sidebarVisible = false;

    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return '/condidate/dashboard';
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
