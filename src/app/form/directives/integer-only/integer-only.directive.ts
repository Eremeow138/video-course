import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { DurationLimit } from "@app/form/enums/duration-limit.enum";

@Directive({
  selector: "[appIntegerOnly]"
})
export class IntegerOnlyDirective {

  @Input()
  private maxDigitNumbers = DurationLimit.MaxValue;

  private input = this.elementRef.nativeElement as HTMLInputElement;

  private integerUnsignedRegex = "^[0-9]*$";

  private allowedKeys = ["Delete", "Backspace", "Enter", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "ControlLeft", "ControlRight"];

  @HostListener("keyup", ["$event"])
  private onKeyUp(): void {
    const originValue = this.input.value;

    if (originValue && originValue.length > 1 && +originValue[0] === 0) {
      this.input.value = originValue.replace(/^0+/, "");
    }
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
    const pressedNumber = Number(event.key);
    const isSeveralZero = previousValue && Number(previousValue) === 0 && pressedNumber === 0;
    const isMaxValueLength = previousValue.length >= String(this.maxDigitNumbers).length;
    const isMaxValue = Number(previousValue) > this.maxDigitNumbers;

    if (isSeveralZero || isMaxValueLength || isMaxValue) {
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
    const pastedValue = String(+pastedString);

    if (isNaN(+pastedString)) {
      event.preventDefault();
      return;
    }

    const isMaxValueLength = pastedValue.length > String(this.maxDigitNumbers).length;
    const isMaxValue = Number(pastedValue) > this.maxDigitNumbers;
    if (isMaxValueLength || isMaxValue) {
      event.preventDefault();
      return;
    }

    if (this.validate(pastedString)) {
      return;
    }
    event.preventDefault();
  }

  constructor(private elementRef: ElementRef) { }

  private validate(value: string): boolean {
    const regEx = new RegExp(this.integerUnsignedRegex);
    return regEx.test(value);
  }

}
