import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "@courses/interfaces/course.interface";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], field: keyof ICourse): ICourse[] {
    return courses.sort((courseA: ICourse, courseB: ICourse) => {

      if (!courseA[field] || !courseB[field]) {
        return 0;
      }

      if (courseA[field] < courseB[field]) {
        return 1;
      } else if (courseA[field] > courseB[field]) {
        return -1;
      }

      return 0;
    });
  }
}
