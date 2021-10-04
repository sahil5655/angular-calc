import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  val1!: any;
  val2!: any;
  val3!: any;

  constructor() { }

  ngOnInit(): void {
  }

  getSum(){
    this.val3 = this.val1 + this.val2;
    console.log(this.val1);
    console.log(this.val2);
    console.log(this.val3);
    }

}