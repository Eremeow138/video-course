import { Component, OnInit } from "@angular/core";
import { ICourse } from "@app/pages/courses-page/courses/interfaces/course.interface";
import { FilterPipe } from "../pipes/filter.pipe";

@Component({
  selector: "app-courses-list-page",
  templateUrl: "./courses-list-page.component.html",
  styleUrls: ["./courses-list-page.component.scss"],
})
export class CoursesListPageComponent implements OnInit {

  public filteredCourses: ICourse[] = [];

  private courses: ICourse[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: "Video Course 1. Name tag",
        creationDate: "2021-11-05T04:39:24+00:00",
        duration: 88,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        isTopRated: true,
      },
      {
        id: 2,
        title: "Video Course 2. Name tag",
        creationDate: "2021-12-12T04:39:24+00:00",
        duration: 34,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        isTopRated: false,
      },
      {
        id: 3,
        title: "Video Course 3. Name tag",
        creationDate: "2021-09-09T04:39:24+00:00",
        duration: 120,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        isTopRated: false,
      },
    ];

    this.filteredCourses = this.courses;
  }

  public filter(searchString: string): void {
    this.filteredCourses = new FilterPipe().transform(this.courses, searchString);
  }
}
