import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
@NgModule({
  imports : 
  [
    BsDatepickerModule.forRoot()
  ]
})
export class CreateEmployeeComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }
}
