import { AfterContentInit, Component, ContentChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.scss"]
})
export class FieldComponent implements AfterContentInit {


  @Input()
  public title!: string;

  public isRequired = false;

  @ContentChild("fieldContent")
  private contentRef!: ElementRef;

  ngAfterContentInit() {
    if (this.contentRef.nativeElement.required) {
      this.isRequired = true;
    }
  }
}
