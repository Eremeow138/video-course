import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appInvalidDateHandler]"
})
export class InvalidDateHandlerDirective {

  private input = this.elementRef.nativeElement as HTMLInputElement;

  private cashedValue = this.input.value;

  @HostListener("change", ["$event"])
  private onChange(): void {
    if (!this.isDateValue(new Date(this.cashedValue))) {
      this.input.value = this.cashedValue;
    }
  }
  @HostListener("input", ["$event"])
  private onInput(): void {
    this.cashedValue = this.input.value;

  }

  constructor(private elementRef: ElementRef) { }

  private isDateValue(value: Date): boolean {
    return value && value instanceof Date && !isNaN(value.getTime());
  }

}
