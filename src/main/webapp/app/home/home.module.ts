import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestuiSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';

import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    imports: [
        TestuiSharedModule,
        AutoCompleteModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestuiHomeModule {}
