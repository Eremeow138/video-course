import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive({
  selector: "[appDuration]"
})
export class DurationDirective {

  @Input("appDuration")
  private control: FormControl = null;

  private regexStr = "^[0-9]*$";

  @HostListener("keydown", ["$event"])
  private onKeyDown(event: KeyboardEvent): void {

    if (["Delete", "Backspace", "Enter", "ArrowLeft", "ArrowRight", "Control"].indexOf(event.code) !== -1 ||
      (event.code === "KeyA" && event.ctrlKey) ||
      (event.code === "KeyC" && event.ctrlKey) ||
      (event.code === "KeyV" && event.ctrlKey) ||
      (event.code === "KeyX" && event.ctrlKey) ||
      (event.code === "KeyZ" && event.ctrlKey)) {
      return;
    }

    if (this.validate(event.key)) {
      return;
    }

    event.preventDefault();
  }

  @HostListener("paste", ["$event"])
  private onPaste(event: ClipboardEvent): void {
    const value = event.clipboardData.getData("text/plain");

    if (this.validate(value)) {
      return;
    }

    const input = this.elementRef.nativeElement as HTMLInputElement;
    const inputValue = input.value.split("");
    const filteredValue = this.deleteExtraChars(value).split("");

    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;


    inputValue.splice(selectionStart, selectionEnd - selectionStart, ...filteredValue);

    input.value = inputValue.join("");

    input.selectionStart = selectionEnd + filteredValue.length;
    input.selectionEnd = selectionEnd + filteredValue.length;

    if (this.control) {
      this.control.setValue(inputValue.join(""));
    }

    event.preventDefault();

  }

  constructor(private elementRef: ElementRef) { }

  private validate(value: string): boolean {
    const regEx = new RegExp(this.regexStr);
    return regEx.test(value);
  }

  private deleteExtraChars(value: string): string {
    const regEx = new RegExp(this.regexStr);
    return value.split("").filter(char => regEx.test(char)).join("");

  }

}
