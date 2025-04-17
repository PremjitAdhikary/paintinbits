import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ElfAndTheRobotService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getPublished(): IImage {
    return {
      hiPath: this.getImagePath('eatr_publish_hi'),
      loPath: this.getImagePath('eatr_publish_lo'),
      thumbPath: '',
      alt: 'Gogona 2025',
      text: '',
      description: ``
    };
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('eatr_01_hi'),
        loPath: this.getImagePath('eatr_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('eatr_02_hi'),
        loPath: this.getImagePath('eatr_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('eatr_03_hi'),
        loPath: this.getImagePath('eatr_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('eatr_04_hi'),
        loPath: this.getImagePath('eatr_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
}
