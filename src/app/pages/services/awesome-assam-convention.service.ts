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

  getPublished(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('aac_prnt_cover_hi'),
        loPath: this.getImagePath('aac_prnt_cover_lo'),
        thumbPath: '',
        alt: 'Xomonoy 2025',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_prnt_01_hi'),
        loPath: this.getImagePath('aac_prnt_01_lo'),
        thumbPath: '',
        alt: 'Comics for Xomonoy 2025',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_prnt_02_hi'),
        loPath: this.getImagePath('aac_prnt_02_lo'),
        thumbPath: '',
        alt: 'Comics for Xomonoy 2025',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aac_prnt_03_hi'),
        loPath: this.getImagePath('aac_prnt_03_lo'),
        thumbPath: '',
        alt: 'Comics for Xomonoy 2025',
        text: '',
        description: ``
      }
    ];
  }
}
