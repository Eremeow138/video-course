import { AfterContentInit, Component, ContentChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.scss"]
})
export class FieldComponent implements AfterContentInit {


  @Input()
  public title = "";

  public isRequired = false;

  @ContentChild("fieldContent")
  private contentRef: ElementRef | null = null;

  ngAfterContentInit() {
    if (this.contentRef && this.contentRef.nativeElement.required) {
      this.isRequired = true;
    }
  }
}
