import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "durationPipe",
})
export class DurationPipe implements PipeTransform {
  public transform(duration: number): string {
    return this.convertToString(duration);
  }

  private convertToString(duration: number): string {
    if (duration < 60) {
      return `${duration}min`;
    }

    const minutes = duration % 60;
    const prettyMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const hours = Math.floor(duration / 60);

    return `${hours}h ${prettyMinutes}min`;
  }
}
