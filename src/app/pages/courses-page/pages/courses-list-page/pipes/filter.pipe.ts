import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "@app/pages/courses-page/courses/interfaces/course.interface";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {

  transform(courses: ICourse[], searchString: string): ICourse[] {
    return courses.filter(course => course.title.includes(searchString));
  }
}
