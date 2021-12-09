import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stringToStringArray"
})
export class StringToStringArrayPipe implements PipeTransform {

  transform(text: string | string[]): string[] {
    if (Array.isArray(text)) {
      return text;
    } else {
      return [text];
    }
  }
}
