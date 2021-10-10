import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subraction',
  templateUrl: './subraction.component.html',
  styleUrls: ['./subraction.component.css']
})
export class SubractionComponent implements OnInit {
  val1!: any;
  val2!: any;
  val3!: any;
  showError: boolean = false;
  invalidInputs: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  subract(){
    if(this.val1== null || this.val2== null) {
      this.invalidInputs = true;
    } else if(this.val1 < this.val2) {
      this.showError = true;
    } else {
      this.val3 = this.val1 * this.val2;
      this.showError = false;
      this.invalidInputs = false;
    }
    }


}