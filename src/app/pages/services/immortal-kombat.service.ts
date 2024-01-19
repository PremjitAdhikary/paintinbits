import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ImmortalKombatService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('ik_cover_hi'),
        loPath: this.getImagePath('ik_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_01_hi'),
        loPath: this.getImagePath('ik_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_02_hi'),
        loPath: this.getImagePath('ik_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_03_hi'),
        loPath: this.getImagePath('ik_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_04_hi'),
        loPath: this.getImagePath('ik_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_05_hi'),
        loPath: this.getImagePath('ik_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_06_hi'),
        loPath: this.getImagePath('ik_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_07_hi'),
        loPath: this.getImagePath('ik_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_08_hi'),
        loPath: this.getImagePath('ik_08_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_09_hi'),
        loPath: this.getImagePath('ik_09_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ik_10_hi'),
        loPath: this.getImagePath('ik_10_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }

  getProcess(): IImage {
    return {
      hiPath: this.getImagePath('ik_process_hi'),
      loPath: this.getImagePath('ik_process_lo'),
      thumbPath: '',
      alt: 'From Script to Page',
      text: '',
      description: ``
    };
  }

  getPerspective(): IImage {
    return {
      hiPath: this.getImagePath('ik_perspective_hi'),
      loPath: this.getImagePath('ik_perspective_lo'),
      thumbPath: '',
      alt: 'So many Camera Angles',
      text: '',
      description: ``
    };
  }

}
