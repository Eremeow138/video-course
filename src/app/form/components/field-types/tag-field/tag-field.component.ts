import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { IAuthor } from "@pages/courses-page/courses/interfaces/course/author.interface";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-tag-field",
  templateUrl: "./tag-field.component.html",
  styleUrls: ["./tag-field.component.scss"]
})
export class TagFieldComponent extends AbstractFieldComponent implements OnInit, OnDestroy {

  public hints$: Observable<IAuthor[]>;

  public isHintListVisible = false;

  @HostListener("document:click", ["$event"])
  public onClick(event: Event): void {
    if (this.input.nativeElement.isSameNode(event.target as HTMLElement)) {
      return;
    }
    if (!this.hintList.nativeElement.isSameNode(event.target as HTMLElement)) {
      this.hideHints();
    }
  }

  @ViewChild("tagInput")
  private input: ElementRef<HTMLInputElement>;
  @ViewChild("tagContainer")
  private tagContainer: ElementRef<HTMLElement>;
  @ViewChild("hintList")
  private hintList: ElementRef<HTMLElement>;

  private searchString = new Subject<string>();

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef, private coursesService: CoursesService) {
    super(cd);
  }

  public ngOnInit(): void {
    this.hints$ = this.searchString.pipe(
      debounceTime(300),
      tap(() => this.showHints()),
      distinctUntilChanged(),
      switchMap((searchString: string) => this.coursesService.searchAuthors(searchString)),
      map(authors => {
        return authors.length ? authors : [{ id: "not-found", name: "Authors not found" }];
      }),
    );
  }

  public ngOnDestroy(): void {
    this.searchString.complete();
  }

  public addTag(event: Event): void {
    const hintElement = event.target as HTMLElement;
    const addedTag = hintElement.textContent;
    const tags = this.control.value as string[];

    if (addedTag && addedTag !== "Authors not found" && !tags.includes(addedTag)) {
      this.control.setValue([...this.control.value, addedTag]);
    }
    this.renderer.setProperty(this.input.nativeElement, "value", "");
    this.hideHints();
  }

  public removeTag(removableTag: string): void {
    const tags = this.control.value as string[];
    this.control.setValue([...tags.filter(tag => tag !== removableTag)]);
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

  public trackByFn(index: number, item: any): any {
    return item;
  }

  public searchHints(searchString: string): void {
    this.searchString.next(searchString.trim());
  }

  public hideHints(): void {
    this.isHintListVisible = false;
  }
  public showHints(): void {
    this.isHintListVisible = true;
  }
}
