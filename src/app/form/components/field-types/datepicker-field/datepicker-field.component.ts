import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-datepicker-field",
  templateUrl: "./datepicker-field.component.html",
  styleUrls: ["./datepicker-field.component.scss"],
})
export class DatepickerFieldComponent extends AbstractFieldComponent implements OnInit {

  public bsConfig: Partial<BsDatepickerConfig>;
  public minDate: Date;

  constructor(protected cd: ChangeDetectorRef) {
    super(cd);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.setMinDate();
    this.getConfig();
  }

  public setValue(value: Date): void {
    if (!this.isDateValue(value)) {
      this.control.patchValue(value);
      return;
    }
    const newValue = this.getDateValue(value);
    if (newValue !== this.control.value) {
      this.control.patchValue(newValue);
    }
  }

  public touchControl(): void {
    this.control.markAsTouched();
  }

  private getDateValue(date: Date): string {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    const differenceTimeZone = newDate.getTime() - (newDate.getTimezoneOffset() * 60000);
    const dateString = new Date(differenceTimeZone).toISOString();

    return dateString.slice(0, dateString.length - 1);
  }

  private setMinDate(): void {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  private getConfig(): void {
    this.bsConfig = Object.assign({}, {
      dateInputFormat: "MM/DD/YYYY",
      containerClass: "bs-datepicker",
      isAnimated: true
    });
  }

  private isDateValue(value: Date): boolean {
    return value && value instanceof Date && !isNaN(value.getTime());
  }
}
