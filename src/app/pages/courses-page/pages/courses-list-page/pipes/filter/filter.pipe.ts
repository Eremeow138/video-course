import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "@courses/interfaces/course/course.interface";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {

  transform(courses: ICourse[], searchString: string): ICourse[] {
    return courses.filter(course => course.title.includes(searchString));
  }
}
