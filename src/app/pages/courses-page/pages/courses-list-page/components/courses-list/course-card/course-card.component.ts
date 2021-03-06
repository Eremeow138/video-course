import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
  @Input()
  public course: ICourse | null = null;

  @Output()
  private deleteCourseEvent = new EventEmitter<number>();
  @Output()
  private editCourseEvent = new EventEmitter<number>();

  public deleteCourse(): void {
    this.deleteCourseEvent.emit(this.course.id);
  }
  public editCourse(): void {
    this.editCourseEvent.emit(this.course.id);
  }
}
