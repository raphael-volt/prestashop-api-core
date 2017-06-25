import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule } from "@angular/http";

// IMPORTS

const services: any[] = [
    // SERVICES
]
 
@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: services,
    declarations: [],
    exports: []
})
export class PrestashopApiModule {

}
