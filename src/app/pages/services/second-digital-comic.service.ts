import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class SecondDigitalComicService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('second_01_hi'),
        loPath: this.getImagePath('second_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('second_02_hi'),
        loPath: this.getImagePath('second_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('second_03_hi'),
        loPath: this.getImagePath('second_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('second_04_hi'),
        loPath: this.getImagePath('second_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
}
