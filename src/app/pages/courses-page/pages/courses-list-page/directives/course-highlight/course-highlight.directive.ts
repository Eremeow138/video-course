import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { CourseStatusEnum } from "../../enums/courses-list.enum";

@Directive({
  selector: "[appCourseHighlight]"
})
export class CourseHighlightDirective implements OnInit {
  @Input("appCourseHighlight")
  private creationDate!: string;

  private readonly freshnessInDays = 14;
  private readonly className = "course-card";
  private readonly separator = "--";
  private readonly millisecondsInDay = 1000 * 60 * 60 * 24;

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngOnInit() {
    this.changeCourseHighlight();
  }

  private changeCourseHighlight() {
    this.removeClasses(...Object.values(CourseStatusEnum));

    const className = this.getClassName();

    if (className) {
      this.addClass(className);
    }
  }

  private getClassName() {
    const currentTimeStamp = new Date().getTime();
    const creationTimeStamp = new Date(this.creationDate).getTime();
    const freshnessOfTimeStamp = currentTimeStamp - (this.millisecondsInDay * this.freshnessInDays);

    const isFresh = creationTimeStamp < currentTimeStamp && creationTimeStamp >= freshnessOfTimeStamp;
    const isUpcoming = creationTimeStamp > currentTimeStamp;

    if (isFresh) {
      return CourseStatusEnum.Fresh;
    } else if (isUpcoming) {
      return CourseStatusEnum.Upcoming;
    } else {
      return null;
    }
  }

  private addClass(status: CourseStatusEnum): void {
    this.renderer.addClass(this.elementRef.nativeElement, `${this.className}${this.separator}${status}`);
  }

  private removeClasses(...statuses: CourseStatusEnum[]): void {
    statuses.forEach(status => this.renderer.removeClass(this.elementRef.nativeElement, `${this.className}${this.separator}${status}`));
  }
}
