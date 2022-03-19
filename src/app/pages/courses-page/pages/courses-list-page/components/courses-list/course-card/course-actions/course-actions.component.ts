import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-course-actions",
  templateUrl: "./course-actions.component.html",
  styleUrls: ["./course-actions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseActionsComponent {
  @Output()
  private deleteEvent = new EventEmitter<void>();

  @Output()
  private editEvent = new EventEmitter<void>();

  public delete(): void {
    this.deleteEvent.emit();
  }
  public edit(): void {
    this.editEvent.emit();
  }
}
