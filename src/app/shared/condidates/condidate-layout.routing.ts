import { Routes } from '@angular/router';

import {OffersListComponent} from "../offers-list/offers-list.component";
import {CondidatesHomeComponent} from "./condidates-home/condidates-home.component";
import {CondidateProfileComponent} from "../condidate-profile/condidate-profile.component";
import {ApplyForumComponent} from "../apply-forum/apply-forum.component";

export const CondidateLayoutRoutes: Routes = [
    { path: 'dashboard_condidate',component: CondidatesHomeComponent },
    { path: 'offers',component: OffersListComponent },
    { path:'profile',component:CondidateProfileComponent},
    { path:'apply',component:ApplyForumComponent}


];
