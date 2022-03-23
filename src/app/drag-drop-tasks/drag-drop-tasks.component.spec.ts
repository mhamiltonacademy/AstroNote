import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropTasksComponent } from './drag-drop-tasks.component';

describe('DragDropTasksComponent', () => {
  let component: DragDropTasksComponent;
  let fixture: ComponentFixture<DragDropTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
