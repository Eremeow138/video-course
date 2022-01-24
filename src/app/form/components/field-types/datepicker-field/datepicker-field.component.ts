import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-datepicker-field",
  templateUrl: "./datepicker-field.component.html",
  styleUrls: ["./datepicker-field.component.scss"]
})
export class DatepickerFieldComponent extends AbstractFieldComponent implements OnInit {

  @ViewChild("datePickerInput")
  public datePickerInput: ElementRef<HTMLInputElement>;

  private userInput = "";

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(() => {
      if (this.control.errors && this.control.errors.bsDate && this.control.errors.bsDate.invalid) {
        this.renderer.setProperty(this.datePickerInput.nativeElement, "value", this.userInput);
      }
    });
  }

  onDateChange(): void {
    this.userInput = this.datePickerInput.nativeElement.value;
  }
}
