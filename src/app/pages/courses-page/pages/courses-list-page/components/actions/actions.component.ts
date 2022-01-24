import { Component } from "@angular/core";
import { RouterPath } from "@commons/enums/routers.enum";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"],
})
export class ActionsComponent {
  public readonly addCourseUrl = `../${RouterPath.CoursePage}`;
}
