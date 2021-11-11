import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { CourseStatusEnum } from "../enums/courses-list.enum";

@Directive({
  selector: "[appCourseHighlight]"
})
export class CourseHighlightDirective implements OnInit {
  @Input("appCourseHighlight")
  public date!: string;
  private readonly freshnessInDays = 14;

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngOnInit() {
    this.addCourseHighlight();
  }

  addCourseHighlight() {
    const currentDate = new Date();
    const creationDate = new Date(Date.parse(this.date));
    const freshnessDate = new Date(new Date().setDate(currentDate.getDate() - this.freshnessInDays));

    const isFresh = creationDate < currentDate && creationDate >= freshnessDate;
    const isUpcoming = creationDate > currentDate;

    const freshClass = CourseStatusEnum.FreshClass;
    const upcomingClass = CourseStatusEnum.UpcomingClass;

    this.removeClasses(freshClass, upcomingClass);

    if (isFresh) {
      this.addClass(freshClass);
    } else if (isUpcoming) {
      this.addClass(upcomingClass);
    }
  }

  addClass(className: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, className);
  }

  removeClasses(...classes: string[]): void {
    classes.forEach(item => this.renderer.removeClass(this.elementRef.nativeElement, item));
  }
}
