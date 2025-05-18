import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class FirstDigitalComicService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('first_01_hi'),
        loPath: this.getImagePath('first_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_02_hi'),
        loPath: this.getImagePath('first_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_03_hi'),
        loPath: this.getImagePath('first_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_04_hi'),
        loPath: this.getImagePath('first_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_05_hi'),
        loPath: this.getImagePath('first_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_06_hi'),
        loPath: this.getImagePath('first_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_07_hi'),
        loPath: this.getImagePath('first_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_08_hi'),
        loPath: this.getImagePath('first_08_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_09_hi'),
        loPath: this.getImagePath('first_09_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_10_hi'),
        loPath: this.getImagePath('first_10_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_11_hi'),
        loPath: this.getImagePath('first_11_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_12_hi'),
        loPath: this.getImagePath('first_12_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_13_hi'),
        loPath: this.getImagePath('first_13_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_14_hi'),
        loPath: this.getImagePath('first_14_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_15_hi'),
        loPath: this.getImagePath('first_15_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_16_hi'),
        loPath: this.getImagePath('first_16_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_17_hi'),
        loPath: this.getImagePath('first_17_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('first_18_hi'),
        loPath: this.getImagePath('first_18_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }

  getPublished(): IImage {
    return {
      hiPath: this.getImagePath('first_publish_hi'),
      loPath: this.getImagePath('first_publish_lo'),
      thumbPath: '',
      alt: 'Gogona 2025',
      text: '',
      description: ``
    };
  }
}
