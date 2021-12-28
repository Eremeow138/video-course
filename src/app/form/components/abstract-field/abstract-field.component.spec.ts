import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AbstractFieldComponent } from "./abstract-field.component";

describe("AbstractFieldComponent", () => {
  let component: AbstractFieldComponent;
  let fixture: ComponentFixture<AbstractFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractFieldComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
