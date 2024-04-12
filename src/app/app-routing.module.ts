import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ListUniveristyComponent } from './list-univeristy/list-univeristy.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-country', component: AddCountryComponent },
  { path: 'list-country', component: ListCountryComponent },
  { path: 'add-university', component: AddUniversityComponent },
  { path: 'list-university', component: ListUniveristyComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
