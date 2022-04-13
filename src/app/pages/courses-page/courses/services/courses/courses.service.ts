/* eslint-disable max-len */
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { urls } from "@environments/environment";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { getAuthorsRequestParams, getCourseRequestParams } from "@settings/settings";
import { Observable, Subject } from "rxjs";
import { IAuthor } from "../../interfaces/course/author.interface";

@Injectable()
export class CoursesService {

  private coursesHasUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getCoursesUpdateDetector(): Observable<void>{
    return this.coursesHasUpdatedSubject.asObservable();
  }

  public detectCoursesUpdating(): void {
    this.coursesHasUpdatedSubject.next();
  }

  public getCourse(courseId: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${urls.courses}/${courseId}`);
  }

  public getListOfCourses(startFrom = 0, countOfCourses = 3, searchString = "", sortKey = "",): Observable<ICourse[]> {
    let params = new HttpParams()
      .append(getCourseRequestParams.startFrom, startFrom)
      .append(getCourseRequestParams.countOfCourses, countOfCourses);

    if (searchString) {
      params = params.append(getCourseRequestParams.searchString, searchString);
    }
    if (sortKey) {
      params = params.append(getCourseRequestParams.sortKey, sortKey);
    }

    return this.http.get<ICourse[]>(urls.courses, { params });
  }

  public getListOfAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(urls.authors);
  }

  public searchAuthors(searchString: string): Observable<IAuthor[]> {
    const treamedSearchString = searchString.trim();
    if (!treamedSearchString) {
      return this.getListOfAuthors();
    }
    const params = new HttpParams().set(getAuthorsRequestParams.searchString, treamedSearchString);
    return this.http.get<IAuthor[]>(urls.authors, { params });
  }

  public createCourse(newCourse: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(urls.courses, newCourse);
  }

  public updateCourse(updatedCourse: ICourse): Observable<ICourse> {
    return this.http.patch<ICourse>(`${urls.courses}/${updatedCourse.id}`, updatedCourse);
  }

  public deleteCourse(courseId: number): Observable<ICourse> {
    return this.http.delete<ICourse>(`${urls.courses}/${courseId}`);
  }
}
