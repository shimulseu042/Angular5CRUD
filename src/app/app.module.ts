import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListofemployeesComponent } from './employees/listofemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ObservabledemoComponent } from './observable/observabledemo.component';

const appRoutes: Routes = [
  {path: 'list', component: ListofemployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'observable', component: ObservabledemoComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListofemployeesComponent,
    CreateEmployeeComponent,
    ObservabledemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
