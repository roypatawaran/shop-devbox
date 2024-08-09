import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TemplatesComponent } from './templates/templates.component';
import { ViewTemplateComponent } from './templates/view-template/view-template.component';
import { DomainSelectionComponent } from './domain-selection/domain-selection.component';
import { AddOnSelectionComponent } from './add-on-selection/add-on-selection.component';
import { BusinessInformationComponent } from './business-information/business-information.component';
import { QuotationPageComponent } from './quotation-page/quotation-page.component';
import { AppointmentSelectionComponent } from './appointment-selection/appointment-selection.component';
import { AppointmentSuccessComponent } from './appointment-success/appointment-success.component';

const routes: Routes = [
  {
    path: 'template',
    component: PagesComponent,
    children: [
      { path: 'selection', component: TemplatesComponent },
      { path: 'view/:id', component: ViewTemplateComponent }
    ]
  },
  {
    path: 'domain',
    component: PagesComponent,
    children: [
      { path: 'selection', component: DomainSelectionComponent },
      // { path: 'view/:id', component: ViewTemplateComponent }
    ]
  },
  {
    path: 'addon',
    component: PagesComponent,
    children: [
      { path: 'selection', component: AddOnSelectionComponent },
      // { path: 'view/:id', component: ViewTemplateComponent }
    ]
  },
  {
    path: 'info',
    component: PagesComponent,
    children: [
      { path: 'business', component: BusinessInformationComponent },
      { path: 'quotation', component: QuotationPageComponent },
      { path: 'appointment', component: AppointmentSelectionComponent },
      { path: 'success', component: AppointmentSuccessComponent },
      // { path: 'view/:id', component: ViewTemplateComponent }
    ]
  },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
