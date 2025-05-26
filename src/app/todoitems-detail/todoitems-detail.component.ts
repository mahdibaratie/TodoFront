import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoServicesService } from './../todoitems-services.service';
import { TodoItem } from '../../TodoItems';
import { IPerson } from '../../IPerson'
import { PersonServicesService } from '../person-services.service';

@Component({
  selector: 'app-todoitems-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './todoitems-detail.component.html',
  styleUrl: './todoitems-detail.component.css',
  standalone: true
})
export class TodoitemsDetailComponent implements OnInit {


  TodoItems: TodoItem[] = [];

  constructor(private _service: TodoServicesService, private _personservice:PersonServicesService) { }

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems(): void {
    this._service.getData().subscribe(data => {
      this.TodoItems = data;
    });
  }
  deleteItem(id: number): void {
    this._service.deleteData(id).subscribe({
      next: () => {
        console.log(`Item with ID ${id} deleted.`);
        this.loadTodoItems(); 
      },
      error: (err) => {
        console.error('Delete failed:', err);
      }
    });
  }

  showAddForm = false;

  newItem: TodoItem = {
    id: 0,
    title: '',
    isComplete: false,
    userId: 0
  };

  users: { id: number, fullName: string }[] = [];


  loadUsers(): void {
    this._personservice.getData().subscribe((data: { id: number; fullName: string }[]) => {
      this.users = data.map(user => ({
        id: user.id,
        fullName: user.fullName
      }));
    });
  }


  saveNewItem(): void {
    this._service.addData(this.newItem).subscribe({
      next: (createdItem) => {
        this.showAddForm = false;
        this.newItem = { id: 0, title: '', isComplete: false, userId: 0 };
        this.loadTodoItems(); 
      },
      error: (err) => {
        console.error('Error saving:', err);

        this.newItem = { id: 0, title: '', isComplete: false, userId: 0 }; 
        this.showAddForm = false; 
      }
    });
  }





}
