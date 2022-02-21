/* eslint-disable max-len */
import { Injectable } from "@angular/core";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { Observable, of } from "rxjs";
import { IAuthor } from "../../interfaces/course/author.interface";

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
      authors: ["John Doe", "Yohan Smitz"]
    },
    {
      id: 2,
      title: "Video Course 2. Name tag",
      creationDate: "2021-12-12T04:39:24+00:00",
      duration: 34,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      isTopRated: false,
      authors: ["Alexandr Pushkin"]
    },
    {
      id: 3,
      title: "Video Course 3. Name tag",
      creationDate: "2021-09-09T04:39:24+00:00",
      duration: 120,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      isTopRated: false,
      authors: ["John Doe", "Elon Mask"]
    },
  ];

  private collectionOfAuthors: IAuthor[] = [
    {
      id: "5b7a846290d6ff6894377fb5",
      name: "Decker Albert"
    },
    {
      id: "5b7a84624010db4d640e0099",
      name: "Vincent Doyle"
    },
    {
      id: "5b7a8462e720a86db64774e7",
      name: "Padilla Berger"
    },
    {
      id: "5b7a84628298a95c17462193",
      name: "Carey Jarvis"
    },
    {
      id: "5b7a846284414c93c2a94eb8",
      name: "Aida Copeland"
    },
    {
      id: "5b7a846205bf3180ca002c82",
      name: "Wall Sandoval"
    },
    {
      id: "5b7a8462cf7298e6d925d18c",
      name: "Shelby Hanson"
    },
    {
      id: "5b7a8462c5e867ec6a1a9b00",
      name: "Jodi Barrett"
    },
  ];

  constructor() { }

  public getListOfCourses(): ICourse[] {
    return this.collectionOfCourses;
  }

  public getListOfAuthors(): Observable<IAuthor[]> {
    return of(this.collectionOfAuthors);
  }

  public searchAuthors(searchString: string): Observable<IAuthor[]> {
    if (!searchString.trim()) {
      return of(this.collectionOfAuthors);
    }

    return of(this.collectionOfAuthors.filter(author => author.name.toLowerCase().includes(searchString.toLowerCase())));
  }

  public createCourse(
    newTitle: string,
    newCreationDate: string,
    newDuration: number,
    newDescription: string,
    newAuthors: string[]): void {

    const newId = this.generateNewId();

    const newCourse: ICourse = {
      id: newId,
      title: newTitle,
      creationDate: newCreationDate,
      duration: newDuration,
      description: newDescription,
      isTopRated: false,
      authors: newAuthors
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
      authors: ["John Doe", "Yohan Smitz"]
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
