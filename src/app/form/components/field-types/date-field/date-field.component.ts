import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DateLimit } from "@app/form/enums/date-limit.enum";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-date-field",
  templateUrl: "./date-field.component.html",
  styleUrls: ["./date-field.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class DateFieldComponent extends AbstractFieldComponent implements OnInit {

  public bsConfig: Partial<BsDatepickerConfig>;
  public minDate: Date;
  public maxDate = new Date(DateLimit.MaxDate);
  public maxDateLenght = DateLimit.MaxDateLenght;

  constructor(private datePipe: DatePipe) {
    super();
  }

  public ngOnInit(): void {
    this.setMinDate();
    this.getConfig();
  }

  public get errors(): string[] {
    const errors: string[] = [];
    if (this.control && this.control.value && this.control.touched && this.control.errors && this.control.errors.bsDate) {
      if (this.control.errors.bsDate.invalid) {
        errors.push("The invalid date has been entered");
      }
      if (this.control.errors.bsDate.minDate) {
        errors.push("The entered date has expired");
      }
      if (this.control.errors.bsDate.maxDate) {
        errors.push("The maximum allowable date has been exceeded");
      }
    }

    return errors;
  }

  public getValue(): string {
    try {
      return this.datePipe.transform(this.control.value as string, "MM/dd/yyyy");
    } catch (error) {
      return this.control.value;
    }
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
