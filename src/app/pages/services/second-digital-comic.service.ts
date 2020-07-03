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
        desktopPath: this.getImagePath('second_01_desk'),
        tabPath: this.getImagePath('second_01_tab'),
        mobilePath: this.getImagePath('second_01_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('second_02_desk'),
        tabPath: this.getImagePath('second_02_tab'),
        mobilePath: this.getImagePath('second_02_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('second_03_desk'),
        tabPath: this.getImagePath('second_03_tab'),
        mobilePath: this.getImagePath('second_03_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('second_04_desk'),
        tabPath: this.getImagePath('second_04_tab'),
        mobilePath: this.getImagePath('second_04_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
}
