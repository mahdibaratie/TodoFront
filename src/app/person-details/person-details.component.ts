import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonServicesService } from './../person-services.service';
import { IPerson } from '../../IPerson';



@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  Persons: IPerson[] = [];

  constructor(private _service: PersonServicesService) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this._service.getData().subscribe(data => {
      this.Persons = data;
    });
  }
  deleteItem(id: number): void {
    this._service.deleteData(id).subscribe({
      next: () => {
        console.log(`Item with ID ${id} deleted.`);
        this.loadPersons();
      },
      error: (err: any) => {
        console.error('Delete failed:', err);
      }
    });
  }


  showAddForm = false;

  newItem: IPerson = {
    id: 0,
    fullName: '',
    phoneNumber: '',
    age: 20,
    gender: 2
  };

  saveNewItem(): void {
    const personToSave: IPerson = {
      ...this.newItem,
      gender: Number(this.newItem.gender)
    };

    this._service.addData(personToSave).subscribe({
      next: () => {
        this.loadPersons();
        this.newItem = {
          id: 0,
          fullName: '',
          phoneNumber: '',
          age: 20,
          gender: 2
        }; 
        this.showAddForm = false;
      },
      error: (err) => {
        console.error('Save failed:', err);
        this.showAddForm = false;
      }
    });
  }




}
