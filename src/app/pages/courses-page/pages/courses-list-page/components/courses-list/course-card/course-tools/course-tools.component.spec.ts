import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseToolsComponent } from './course-tools.component';

describe('CourseToolsComponent', () => {
  let component: CourseToolsComponent;
  let fixture: ComponentFixture<CourseToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseToolsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
