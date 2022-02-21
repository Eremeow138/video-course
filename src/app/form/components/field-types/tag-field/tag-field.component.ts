import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { IAuthor } from "@pages/courses-page/courses/interfaces/course/author.interface";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-tag-field",
  templateUrl: "./tag-field.component.html",
  styleUrls: ["./tag-field.component.scss"]
})
export class TagFieldComponent extends AbstractFieldComponent implements OnInit, OnDestroy {

  public authors$: Observable<IAuthor[]>;

  public isAuthorListVisible = true;

  @ViewChild("tagInput")
  private input: ElementRef<HTMLInputElement>;
  @ViewChild("tagContainer")
  private tagContainer: ElementRef<HTMLElement>;

  private searchString = new Subject<string>();

  constructor(private renderer: Renderer2, cd: ChangeDetectorRef, private coursesService: CoursesService) {
    super(cd);
  }

  public ngOnInit(): void {
    this.authors$ = this.searchString.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchString: string) => this.coursesService.searchAuthors(searchString)),
      map(authors => {
        return authors.length ? authors : [{ id: "not-found", name: "Authors not found" }];
      })
    );
  }

  public ngOnDestroy(): void {
    this.searchString.complete();
  }

  public addAuthor(event: Event): void {
    const authorElement = event.target as HTMLElement;
    const addedAuthor = authorElement.textContent;
    const authors = this.control.value as string[];

    if (addedAuthor && addedAuthor !== "Authors not found" && !authors.includes(addedAuthor)) {
      this.control.setValue([...this.control.value, addedAuthor]);
    }
    this.renderer.setProperty(this.input.nativeElement, "value", "");
    this.hideAuthors();
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

  public trackByFn(index: number, item: any): any {
    return item;
  }

  public searchAuthors(searchString: string): void {
    this.showAuthors();
    this.searchString.next(searchString);
  }

  public hideAuthors(): void {
    this.isAuthorListVisible = false;
  }
  public showAuthors(): void {
    this.isAuthorListVisible = true;
  }
}
