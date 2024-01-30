import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar_condidatorComponent } from './navbar_condidator.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ Navbar_condidatorComponent ],
    exports: [ Navbar_condidatorComponent ]
})

export class Navbar_condidatorModule {

}
