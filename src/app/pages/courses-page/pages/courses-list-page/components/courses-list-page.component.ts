import { Component, OnInit } from "@angular/core";
import { ICourse } from "@app/pages/courses-page/courses/interfaces/course.interface";
import { FilterPipe } from "../pipes/filter/filter.pipe";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "app-courses-list-page",
  templateUrl: "./courses-list-page.component.html",
  styleUrls: ["./courses-list-page.component.scss"],
})
export class CoursesListPageComponent implements OnInit {

  public filteredCourses: ICourse[] = [];

  private filterСache = "";

  private courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getFreshData();
  }

  public filter(searchString: string): void {
    this.filteredCourses = new FilterPipe().transform(this.courses, searchString);
    this.filterСache = searchString;
  }

  public deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id);
    this.getFreshData();
  }

  public loadMoreCourses(): void {
    this.coursesService.loadMoreCourses();
    this.getFreshData();
  }

  private getFreshData(): void {
    this.courses = this.coursesService.getListOfCourses();

    if (this.filterСache) {
      this.filter(this.filterСache);
    } else {
      this.filteredCourses = this.courses;
    }
  }
}
