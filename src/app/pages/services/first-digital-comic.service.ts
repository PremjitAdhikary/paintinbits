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
        desktopPath: this.getImagePath('first_01_desk'),
        tabPath: this.getImagePath('first_01_tab'),
        mobilePath: this.getImagePath('first_01_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_02_desk'),
        tabPath: this.getImagePath('first_02_tab'),
        mobilePath: this.getImagePath('first_02_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_03_desk'),
        tabPath: this.getImagePath('first_03_tab'),
        mobilePath: this.getImagePath('first_03_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_04_desk'),
        tabPath: this.getImagePath('first_04_tab'),
        mobilePath: this.getImagePath('first_04_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_05_desk'),
        tabPath: this.getImagePath('first_05_tab'),
        mobilePath: this.getImagePath('first_05_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_06_desk'),
        tabPath: this.getImagePath('first_06_tab'),
        mobilePath: this.getImagePath('first_06_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_07_desk'),
        tabPath: this.getImagePath('first_07_tab'),
        mobilePath: this.getImagePath('first_07_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_08_desk'),
        tabPath: this.getImagePath('first_08_tab'),
        mobilePath: this.getImagePath('first_08_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_09_desk'),
        tabPath: this.getImagePath('first_09_tab'),
        mobilePath: this.getImagePath('first_09_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_10_desk'),
        tabPath: this.getImagePath('first_10_tab'),
        mobilePath: this.getImagePath('first_10_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_11_desk'),
        tabPath: this.getImagePath('first_11_tab'),
        mobilePath: this.getImagePath('first_11_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_12_desk'),
        tabPath: this.getImagePath('first_12_tab'),
        mobilePath: this.getImagePath('first_12_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_13_desk'),
        tabPath: this.getImagePath('first_13_tab'),
        mobilePath: this.getImagePath('first_13_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_14_desk'),
        tabPath: this.getImagePath('first_14_tab'),
        mobilePath: this.getImagePath('first_14_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_15_desk'),
        tabPath: this.getImagePath('first_15_tab'),
        mobilePath: this.getImagePath('first_15_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_16_desk'),
        tabPath: this.getImagePath('first_16_tab'),
        mobilePath: this.getImagePath('first_16_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_17_desk'),
        tabPath: this.getImagePath('first_17_tab'),
        mobilePath: this.getImagePath('first_17_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('first_18_desk'),
        tabPath: this.getImagePath('first_18_tab'),
        mobilePath: this.getImagePath('first_18_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
}
