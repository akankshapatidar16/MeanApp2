import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffixADorBC'
})
export class ADorBCPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let year = value;
    //console.log("year=", value);
    if (year < 0) year = -year + " BC"
    else year = year + " AD";
    return year;
  }

  constructor() {

  }

}
