import { DatePipe } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-datepicker-field",
  templateUrl: "./datepicker-field.component.html",
  styleUrls: ["./datepicker-field.component.scss"],
  providers: [DatePipe]
})
export class DatepickerFieldComponent extends AbstractFieldComponent implements AfterViewInit {

  @ViewChild("datePickerInput")
  public datePickerInput: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef, private datePipe: DatePipe) {
    super(cd);
  }

  ngAfterViewInit(): void {
    const initDate = this.datePipe.transform(this.control.value, "MM/dd/yyyy");
    this.renderer.setProperty(this.datePickerInput.nativeElement, "value", initDate);
  }

  // TODO make it better
  setDate(date: Date): void {
    if (!isNaN(date.getTime())) {
      const formatedDate = this.datePipe.transform(date, "yyyy-MM-ddThh:mm:sszzzz").replace("GMT", "");
      this.control.setValue(formatedDate);
      return;
    }
    this.control.setValue(date);
  }

  public touchControl(): void {
    this.control.markAsTouched();
  }
}
