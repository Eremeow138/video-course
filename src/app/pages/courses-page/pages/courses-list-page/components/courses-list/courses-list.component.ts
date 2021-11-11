import { Component, OnInit } from "@angular/core";
import { ICourse } from "@courses/interfaces/course.interface";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];

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
  }

  // eslint-disable-next-line class-methods-use-this
  public trackByFn(index: number, course: ICourse): number {
    return course.id;
  }

  public getCoursesFromServer() {
    this.courses = [
      ...this.courses,
      {
        id: 4,
        title: "Video Course 4. Name tag",
        creationDate: "2021-09-09T04:39:24+00:00",
        duration: 1250,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        isTopRated: true,
      },
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  public deleteCourse(course: ICourse): void {
    console.log(course.id);
  }
}
