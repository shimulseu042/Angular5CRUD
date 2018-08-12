import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {
employees: Employee[] = [
  {
    id: 1,
    name: "Mark",
    gender: "Male",
    contactPreference:"email",
    email: "mark@pragimtech.com",
    dateOfBirth: new Date('8/12/2018'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/mark.png'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 2345978640,
    dateOfBirth: new Date('11/20/1979'),
    department: 'HR',
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 3,
    name: 'John',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 5432978640,
    dateOfBirth: new Date('3/25/1976'),
    department: 'IT',
    isActive: false,
    photoPath: 'assets/images/john.png'
  }
];
  constructor() { }

  ngOnInit() {
  }

}