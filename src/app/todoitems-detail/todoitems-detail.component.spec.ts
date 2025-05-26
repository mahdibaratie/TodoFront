import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TodoitemsDetailComponent } from './todoitems-detail.component';

describe('TodoitemsDetailComponent', () => {
  let component: TodoitemsDetailComponent;
  let fixture: ComponentFixture<TodoitemsDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodoitemsDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoitemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
