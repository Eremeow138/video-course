import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-tag-field",
  templateUrl: "./tag-field.component.html",
  styleUrls: ["./tag-field.component.scss"]
})
export class TagFieldComponent extends AbstractFieldComponent {

  @ViewChild("tagInput")
  private input: ElementRef<HTMLInputElement>;
  @ViewChild("tagContainer")
  private tagContainer: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef) {
    super(cd);
  }

  public addAuthor(): void {
    const addedAuthor = this.input.nativeElement.value;
    const authors = this.control.value as string[];

    if (addedAuthor) {
      if (!authors.includes(addedAuthor)) {
        this.control.setValue([...this.control.value, addedAuthor]);
      }
      this.renderer.setProperty(this.input.nativeElement, "value", "");
    }
  }

  public removeAuthor(removableAuthor: string): void {
    const authors = this.control.value as string[];
    this.control.setValue([...authors.filter(author => author !== removableAuthor)]);
  }

  public touchControl(): void {
    this.control.markAsTouched();
  }

  public activateInput(event: Event): void {
    const target = event.target as HTMLElement;

    if (target.className === this.tagContainer.nativeElement.className) {
      this.input.nativeElement.focus();
    }
  }
}
