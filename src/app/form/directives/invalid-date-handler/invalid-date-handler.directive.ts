import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appInvalidDateHandler]"
})
export class InvalidDateHandlerDirective {

  private input = this.elementRef.nativeElement as HTMLInputElement;

  private regex = "^[0-9/]*$";

  private allowedKeys = ["Delete", "Backspace", "Enter", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "ControlLeft", "ControlRight"];

  private cachedValue = this.input.value;

  @HostListener("change", ["$event"])
  private onChange(): void {
    if (!this.isDateValue(new Date(this.input.value))) {
      this.input.value = this.cachedValue;
    }
  }

  @HostListener("keyup", ["$event"])
  private onKeyUp(): void {
    const originValue = this.input.value;

    if (originValue && originValue.length > 1 && +originValue[1] === 0) {
      this.input.value = originValue.replace(/^0+/, "");
      if (+originValue[0] === 0) {
        this.input.value = `0${this.input.value}`;
      }

    }

    this.cachedValue = this.input.value;
  }

  @HostListener("keydown", ["$event"])
  private onKeyDown(event: KeyboardEvent): void {

    if (this.allowedKeys.indexOf(event.code) !== -1 ||
      (event.code === "KeyA" && event.ctrlKey) ||
      (event.code === "KeyC" && event.ctrlKey) ||
      (event.code === "KeyV" && event.ctrlKey) ||
      (event.code === "KeyX" && event.ctrlKey) ||
      (event.code === "KeyY" && event.ctrlKey) ||
      (event.code === "KeyZ" && event.ctrlKey)) {
      return;
    }

    const previousValue = this.input.value;
    const pressedValue = event.key;
    const isSeveralZero = previousValue && Number(previousValue) === 0 && Number(pressedValue) === 0;

    if (isSeveralZero) {
      event.preventDefault();
      return;
    }

    if (this.validate(event.key)) {
      return;
    }
    event.preventDefault();
  }

  @HostListener("paste", ["$event"])
  private onPaste(event: ClipboardEvent): void {
    const pastedString = event.clipboardData.getData("text/plain");

    if (!this.isDateValue(new Date(pastedString))) {
      event.preventDefault();
    }

    return;
  }

  constructor(private elementRef: ElementRef) { }

  private isDateValue(value: Date): boolean {
    return value && value instanceof Date && !isNaN(value.getTime());
  }

  private validate(value: string): boolean {
    const regEx = new RegExp(this.regex);
    return regEx.test(value);
  }

}
