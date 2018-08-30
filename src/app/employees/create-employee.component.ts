import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {Employee} from '../models/employee.model'
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
@NgModule({
})
export class CreateEmployeeComponent implements OnInit {
  isPreview: boolean = false;
  bsDatePicker:Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    email: '',
    gender: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath:null
  };
  // employee: Employee = new Employee();
  departments: Department[] = [
    {
      id: 1, name:'Help Desk'
    },
    {
      id: 2, name:'HR'
    },
    {
      id: 3, name:'Payroll'
    },
    {
      id: 4, name:'IT'
    }
];
  // isActive = true;
  // department = "3";
  constructor() { 
    this.bsDatePicker = Object.assign
    (
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
  );
  }
  togglePhotoPreview(){
    debugger;
    this.isPreview =! this.isPreview;
  }
  ngOnInit() {
  }
  saveEmployee(newEmployee: Employee): void{
    console.log(newEmployee);
  }
}
