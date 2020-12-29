import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})
export class SummarizePipe implements PipeTransform {

  // @ts-ignore
  transform(value: string, limit: number): string {
    if (value.length > 0 ){
      return value.substr(0, 100) + '...';
    }
  }

}
