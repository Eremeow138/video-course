import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild
} from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-tag-field",
  templateUrl: "./tag-field.component.html",
  styleUrls: ["./tag-field.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagFieldComponent extends AbstractFieldComponent {
  @Input()
  public hintsNotFound: string = null;

  @Input()
  public hints: string[] = [];

  public isHintListVisible = false;

  @HostListener("document:click", ["$event"])
  public onClickOutHintList(event: Event): void {
    if (this.input && this.input.nativeElement && this.input.nativeElement.isSameNode(event.target as HTMLElement)) {
      return;
    }
    if (this.hintList && this.hintList.nativeElement && !this.hintList.nativeElement.isSameNode(event.target as HTMLElement)) {
      this.hideHints();
    }
  }

  @Output()
  private searchEvent = new EventEmitter<string>();

  @ViewChild("tagInput")
  private input: ElementRef<HTMLInputElement>;

  @ViewChild("tags")
  private tags: ElementRef<HTMLElement>;

  @ViewChild("hintList")
  private hintList: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef) {
    super(cd);
  }

  public isSelectedHint(hint: string): boolean {
    return this.control.value.includes(hint);
  }

  public addTag(event: Event): void {
    const hintElement = event.target as HTMLElement;
    const addedTag = hintElement.textContent;
    const tags = this.control.value as string[];

    if (hintElement === this.hintList.nativeElement) {
      return;
    }

    if (addedTag && addedTag !== this.hintsNotFound && !tags.includes(addedTag)) {
      this.control.patchValue([...tags, addedTag]);
      this.scrollTagsToEnd();
    }
    this.renderer.setProperty(this.input.nativeElement, "value", "");

    this.hideHints();
  }

  public removeTag(removableTag: string): void {
    const tags = this.control.value as string[];
    this.control.patchValue([...tags.filter(tag => tag !== removableTag)]);
  }

  public touchControl(): void {
    this.control.markAsTouched();
  }

  public trackByFn(index: number, item: any): any {
    return item;
  }

  public searchHints(searchString: string): void {
    this.searchEvent.emit(searchString.trim());
  }

  public hideHints(): void {
    this.isHintListVisible = false;
    this.searchHints(this.input.nativeElement.value);
  }
  public showHints(): void {
    this.isHintListVisible = true;
  }

  private scrollTagsToEnd(): void {
    this.tags.nativeElement.scrollTo({
      left: this.tags.nativeElement.scrollWidth,
      behavior: "smooth"
    });
  }
}
