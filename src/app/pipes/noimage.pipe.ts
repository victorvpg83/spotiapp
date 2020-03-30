import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if ( !images ) {
      return 'assets/img/noimage.jpeg'
    }

    return ( images.length > 0 ) ? images[0].url : 'assets/img/noimage.jpeg'

  }

}
