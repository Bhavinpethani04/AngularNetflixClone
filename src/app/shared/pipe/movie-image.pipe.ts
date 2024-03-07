import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImagePipe',
  standalone: true,
})
export class MovieImagePipe implements PipeTransform {
  transform(value: string): string {
    return ('https://image.tmdb.org/t/p/w500' + value);
  }
}
