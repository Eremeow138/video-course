import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { CourseStatusEnum } from "@courses-list-page/enums/courses-list.enum";

@Directive({
  selector: "[appCourseHighlight]"
})
export class CourseHighlightDirective implements OnInit {
  @Input("appCourseHighlight")
  private creationDate: string | null = null;

  private readonly freshnessInDays = 14;
  private readonly className = "course-card--";
  private readonly millisecondsInDay = 1000 * 60 * 60 * 24;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.changeCourseHighlight();
  }

  private changeCourseHighlight(): void {
    this.removeClasses(...Object.values(CourseStatusEnum));

    const statusCourse = this.getStatusCourse();

    if (statusCourse) {
      this.addClass(statusCourse);
    }
  }

  private getStatusCourse(): CourseStatusEnum | null {
    if (!this.creationDate) {
      return null;
    }
    const currentTimeStamp = new Date().getTime();
    const creationTimeStamp = new Date(this.creationDate).getTime();
    const freshnessOfTimeStamp = currentTimeStamp - (this.millisecondsInDay * this.freshnessInDays);

    const isFresh = creationTimeStamp < currentTimeStamp && creationTimeStamp >= freshnessOfTimeStamp;
    const isUpcoming = creationTimeStamp > currentTimeStamp;

    if (isFresh) {
      return CourseStatusEnum.Fresh;
    } else if (isUpcoming) {
      return CourseStatusEnum.Upcoming;
    }
    return null;
  }

  private addClass(status: CourseStatusEnum): void {
    const className = `${this.className}${status}`;

    this.renderer.addClass(this.elementRef.nativeElement, className);
  }

  private removeClasses(...statuses: CourseStatusEnum[]): void {
    statuses.forEach(status => {
      const className = `${this.className}${status}`;
      this.renderer.removeClass(this.elementRef.nativeElement, className);
    });
  }
}
