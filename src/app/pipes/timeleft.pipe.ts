import { Pipe, PipeTransform } from '@angular/core';
import {UtilsService} from '../utils.service';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {
  constructor(private utilsService: UtilsService) {
  }
  transform(value: Date): any{
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const  y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    if (y > 0) { return y + 'a'; }
    const  d = Math.floor(diff / 1000 / 60 / 60 / 24 );
    if (d > 0) { return d + 'j' ; }
    const  h = Math.floor(diff / 1000 / 60 / 60 ) % 60;
    if (h > 0) {  return h + 'h' ; }
    const  s = Math.floor(diff / 1000 % 60);
    if (s > 0) {  return s + 'h' ; }
  }

}
