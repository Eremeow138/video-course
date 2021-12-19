import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICourse } from "@courses/interfaces/course.interface";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  @Input()
  public course: ICourse | null = null;

  @Output()
  private deleteCourseEvent = new EventEmitter<number>();

  public deleteCourse(): void {
    this.deleteCourseEvent.emit(this.course.id);
  }
}
