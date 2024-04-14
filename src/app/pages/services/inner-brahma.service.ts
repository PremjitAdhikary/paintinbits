import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class InnerBrahmaService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getPublished(): IImage {
    return {
      hiPath: this.getImagePath('ib_publish_hi'),
      loPath: this.getImagePath('ib_publish_lo'),
      thumbPath: '',
      alt: 'A collage of all pages',
      text: '',
      description: ``
    };
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('ib_cover_hi'),
        loPath: this.getImagePath('ib_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ib_01_hi'),
        loPath: this.getImagePath('ib_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ib_02_hi'),
        loPath: this.getImagePath('ib_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ib_03_hi'),
        loPath: this.getImagePath('ib_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ib_04_hi'),
        loPath: this.getImagePath('ib_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
     ];
  }

}
