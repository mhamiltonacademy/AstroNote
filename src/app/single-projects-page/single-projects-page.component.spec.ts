import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectsPageComponent } from './single-projects-page.component';

describe('SingleProjectsPageComponent', () => {
  let component: SingleProjectsPageComponent;
  let fixture: ComponentFixture<SingleProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
