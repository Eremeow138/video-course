import { Directive, HostListener } from "@angular/core";
import { Duration } from "@app/form/enums/duration.enum";

@Directive({
  selector: "[appDuration]"
})
export class DurationDirective {

  private integerUnsignedRegex = Duration.Pattern.toString();

  private allowedKeys = ["Delete", "Backspace", "Enter", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "ControlLeft", "ControlRight"];

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
    event.preventDefault();
  }

  private validate(value: string): boolean {
    const regEx = new RegExp(this.integerUnsignedRegex);
    return regEx.test(value);
  }

}
