import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName',
})
export class FirstNamePipe implements PipeTransform {
  transform(name: string): string {
    console.log('Executado Pipe!');
    return name.split(' ')[0];
  }
}
