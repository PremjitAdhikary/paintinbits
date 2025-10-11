import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class AwesomeAssamConventionService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('aac_00_hi'),
        loPath: this.getImagePath('aac_00_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_01_hi'),
        loPath: this.getImagePath('aac_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_02_hi'),
        loPath: this.getImagePath('aac_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_03_hi'),
        loPath: this.getImagePath('aac_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_04_hi'),
        loPath: this.getImagePath('aac_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_05_hi'),
        loPath: this.getImagePath('aac_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_06_hi'),
        loPath: this.getImagePath('aac_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_07_hi'),
        loPath: this.getImagePath('aac_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
}
