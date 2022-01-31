import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICourse } from "@courses/interfaces/course.interface";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent {
  @Input()
  public courses: ICourse[] = [];

  @Output()
  private deleteCourseEvent = new EventEmitter<number>();
  @Output()
  private editCourseEvent = new EventEmitter<number>();
  @Output()
  private loadMoreCoursesEvent = new EventEmitter();

  public trackByFn(index: number, course: ICourse): number {
    return course.id;
  }

  public loadMoreCourses(): void {
    this.loadMoreCoursesEvent.emit();
  }

  public deleteCourse(courseId: number): void {
    this.deleteCourseEvent.emit(courseId);
  }
  public editCourse(courseId: number): void {
    this.editCourseEvent.emit(courseId);
  }
}
