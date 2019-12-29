import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestuiSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  imports: [TestuiSharedModule, AutoCompleteModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class TestuiHomeModule {}
