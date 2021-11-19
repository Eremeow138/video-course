/* eslint-disable max-len */
import { Injectable } from "@angular/core";
import { ICourse } from "@app/pages/courses-page/courses/interfaces/course.interface";

@Injectable()
export class CoursesService {

  private collectionOfCourses = [
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
  constructor() { }

  public getListOfCourses(): ICourse[] {
    return this.collectionOfCourses;
  }

  public createCourse(
    newTitle: string,
    newCreationDate: string,
    newDuration: number,
    newDescription: string): void {

    const newId = this.generateNewId();

    const newCourse: ICourse = {
      id: newId,
      title: newTitle,
      creationDate: newCreationDate,
      duration: newDuration,
      description: newDescription,
      isTopRated: false
    };

    this.collectionOfCourses.push(newCourse);
  }

  public getCourse(courseId: number): ICourse | null {
    const neededCourse = this.collectionOfCourses.find(course => course.id === courseId);
    if (neededCourse) {
      return neededCourse;
    }
    return null;
  }

  public updateCourse(updatedCourse: ICourse): void {
    this.collectionOfCourses = this.collectionOfCourses.map(course => course.id === updatedCourse.id ? updatedCourse : course);
  }

  public deleteCourse(courseId: number): void {
    this.collectionOfCourses = this.collectionOfCourses.filter(course => course.id !== courseId);
  }

  public loadMoreCourses(): void {
    const newId = this.generateNewId();
    const newCourse = {
      id: newId,
      title: `Video Course ${newId}. Name tag`,
      creationDate: "2021-09-09T04:39:24+00:00",
      duration: 1250,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      isTopRated: true,
    };
    this.collectionOfCourses.push(newCourse);
  }

  private generateNewId(): number {
    if (this.collectionOfCourses.length) {
      return this.collectionOfCourses.reduce(
        (biggerIdCourse, currentCourse) =>
          biggerIdCourse.id > currentCourse.id ? biggerIdCourse : currentCourse
      ).id + 1;
    }
    return 1;
  }
}
