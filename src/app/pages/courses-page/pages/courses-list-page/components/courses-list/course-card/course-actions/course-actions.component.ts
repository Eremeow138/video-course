import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-course-actions",
  templateUrl: "./course-actions.component.html",
  styleUrls: ["./course-actions.component.scss"],
})
export class CourseActionsComponent {
  @Output()
  private deleteEvent = new EventEmitter<void>();

  public delete(): void {
    this.deleteEvent.emit();
  }
}
