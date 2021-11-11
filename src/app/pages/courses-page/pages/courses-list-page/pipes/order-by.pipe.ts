import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "@app/pages/courses-page/courses/interfaces/course.interface";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], field: keyof ICourse): ICourse[] {
    return courses.sort(this.byField(field));
  }

  byField(field: keyof ICourse) {
    return (courseA: ICourse, courseB: ICourse) => courseA[field] > courseB[field] ? 1 : -1;
  }
}
