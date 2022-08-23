import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apend'
})
export class ApendPipe implements PipeTransform {

  transform(value:any, appendText:any): unknown {
    return value + appendText;
  }

}
