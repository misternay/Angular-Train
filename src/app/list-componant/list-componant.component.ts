import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-componant',
  templateUrl: './list-componant.component.html',
  styleUrls: ['./list-componant.component.css']
})
export class ListComponantComponent implements OnInit {
  
  constructor() { }

  @Input() listItem;
  @Output() param = new EventEmitter();

  ngOnInit() {
  }

  onDelete(item,index){
    this.param.emit(index)
  }

  onEdit(item,index){
    
  }
}
