import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
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
  dateOfBirth: Date = new Date(1993,3,29);
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
        showWeekNumbers: false,
        // minDate: new Date(2018,0,1),
        // maxDate: new Date(2018,11,31),
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
  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }
}
