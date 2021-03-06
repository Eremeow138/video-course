import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";

@Component({
  selector: "app-course-tools",
  templateUrl: "./course-tools.component.html",
  styleUrls: ["./course-tools.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseToolsComponent {
  @Input()
  public course: ICourse | null = null;
}
