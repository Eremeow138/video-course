import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
})
export class DurationPrettierPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(duration: number): string {
    if (duration < 60) {
      return `${duration} min`;
    }

    const minutes = duration % 60;
    const hours = Math.ceil(duration / 60);

    return `${hours}h ${minutes > 9 ? minutes : `0${minutes}`} min`;
  }
}
