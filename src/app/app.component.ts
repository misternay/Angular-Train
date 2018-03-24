import { Component, OnInit } from '@angular/core';
import { CallServiceService } from './call-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lists =[];

  constructor(private callServiceService:CallServiceService){
    
  }
  ngOnInit():void{
    this.callServiceService.getData().subscribe(res => {
      console.log(res);
    });
  }
  onShow(data){
    this.lists.push(data)
  }
  onEdit(data){
    this.lists.splice(data,1)
  }
}
