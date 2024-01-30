import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Sidebar_condidater} from "./sidebar_condidater";

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ Sidebar_condidater ],
    exports: [ Sidebar_condidater ]
})

export class Sidebar_condidaterModule {}
