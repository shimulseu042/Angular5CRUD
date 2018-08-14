import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map'; 
@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {
 debugger;
  private data : Observable<string>;
  private fruits : Array<string> = [];
  private anyErrors: boolean;
  private finished : boolean;
  private processed : boolean = false;
  mathgroup: FormGroup;
  inputNumber: FormControl;
  square: number; 
  
  
  constructor(private fg: FormBuilder) { 
    this.inputNumber = new FormControl();
    this.mathgroup = fg.group(
      {
        inputNumber : this.inputNumber
      }
    )
    this.inputNumber.valueChanges.map(n=>n*n)
      .subscribe(power => this.square = power);
  }

  ngOnInit() {
    
  }

  Start(){
      debugger;
    this.data = new Observable(
      observer =>
      {
        setTimeout(() => {
          observer.next('Apple');
        }, 1000);

        setTimeout(() => {
          observer.next('Banana');
        }, 2000);

        setTimeout(() => {
          observer.next('Mango');
        }, 3000);

        setTimeout(() => {
          observer.error(new Error('Observer Error occured'));
        }, 3500);

        setTimeout(() => {
          observer.next('Finished');
          observer.complete();
        }, 4000);
      }
  )
  let subscription = this.data.subscribe(
    
    fruit => this.fruits.push(fruit),
    error => this.anyErrors = false,
    () => this.finished = true
  )
 }
}
