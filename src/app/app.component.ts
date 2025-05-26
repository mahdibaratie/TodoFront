import { TodoServicesService } from './todoitems-services.service';
import { PersonServicesService } from './person-services.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TodoItem } from "./../TodoItems";
import { IPerson } from "./../IPerson";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterModule,
   
  ]
})


export class AppComponent implements OnInit {


  constructor(private _todoservice: TodoServicesService, private _personservice: PersonServicesService) {

  }

 

  TodoItems: TodoItem[] = [];
  Person: IPerson[] = [];

  ngOnInit() {
    this._todoservice.getData().subscribe(data => {
      this.TodoItems = data;
    });

  }


}
