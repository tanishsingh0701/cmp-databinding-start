import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element:{type:string,name:string,content:string};

  constructor() 
  {
    console.log("contstructor is called");

   }

  ngOnInit(): void {
    console.log("ngOnInit is called");
  }

  ngDoCheck(changes:SimpleChanges)
  {
    console.log("ngDoCheck Called");

  }

  ngOnChanges()
  {
    console.log("ngOnChanges is called");

  }

}
