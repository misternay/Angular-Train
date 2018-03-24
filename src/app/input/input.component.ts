import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  header: string = "BasicAngular";
  input1:string = ''  ;
  listItem = [];
  ngOnInit() {
  }
  @Output() param = new EventEmitter();
  onClick() {
    console.log(this.listItem)
    // this.listItem.push(this.input1)
    // this.input1 = ""
    this.param.emit(this.input1);
  }
}
