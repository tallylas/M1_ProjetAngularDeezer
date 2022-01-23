import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationConversion'
})
export class DurationConversionPipe implements PipeTransform {

  public transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + 'm' + (value - minutes * 60);
  }

}
