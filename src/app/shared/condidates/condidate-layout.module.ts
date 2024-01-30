import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import {CondidateLayoutRoutes} from "./condidate-layout.routing";
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../job_offer/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {CondidatesHomeComponent} from "./condidates-home/condidates-home.component";
import {OffersListComponent} from "../offers-list/offers-list.component";
import {MatCardModule} from "@angular/material/card";
import {CondidateProfileComponent} from "../condidate-profile/condidate-profile.component";
import {ApplyForumComponent} from "../apply-forum/apply-forum.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CondidateLayoutRoutes),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
        MatCardModule,
    ],
  declarations: [
    CondidatesHomeComponent,
    OffersListComponent,
    CondidateProfileComponent,
    ApplyForumComponent
  ]
})

export class CondidateLayoutModule {}
