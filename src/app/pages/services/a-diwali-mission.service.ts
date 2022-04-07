import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ADiwaliMissionService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('adm_01_hi'),
        loPath: this.getImagePath('adm_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_02_hi'),
        loPath: this.getImagePath('adm_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_03_hi'),
        loPath: this.getImagePath('adm_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_04_hi'),
        loPath: this.getImagePath('adm_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_05_hi'),
        loPath: this.getImagePath('adm_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_06_hi'),
        loPath: this.getImagePath('adm_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }

  getMaking(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('adm_making_01_hi'),
        loPath: this.getImagePath('adm_making_01_lo'),
        thumbPath: this.getImagePath('adm_making_01_thumb'),
        alt: '',
        text: 'Perspective Lines',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_02_hi'),
        loPath: this.getImagePath('adm_making_02_lo'),
        thumbPath: this.getImagePath('adm_making_02_thumb'),
        alt: '',
        text: 'Character Boxes',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_03_hi'),
        loPath: this.getImagePath('adm_making_03_lo'),
        thumbPath: this.getImagePath('adm_making_03_thumb'),
        alt: '',
        text: 'Stick Figures',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_04_hi'),
        loPath: this.getImagePath('adm_making_04_lo'),
        thumbPath: this.getImagePath('adm_making_04_thumb'),
        alt: '',
        text: 'Basic Figures',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_05_hi'),
        loPath: this.getImagePath('adm_making_05_lo'),
        thumbPath: this.getImagePath('adm_making_05_thumb'),
        alt: '',
        text: 'Rough Lines',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_06_hi'),
        loPath: this.getImagePath('adm_making_06_lo'),
        thumbPath: this.getImagePath('adm_making_06_thumb'),
        alt: '',
        text: 'Final Lines',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_making_07_hi'),
        loPath: this.getImagePath('adm_making_07_lo'),
        thumbPath: this.getImagePath('adm_making_07_thumb'),
        alt: '',
        text: 'Colors',
        description: ``
      }
    ];
  }

  getMesmerize(): IImage {
    return {
      hiPath: this.getImagePath('adm_mesmerize_hi'),
      loPath: this.getImagePath('adm_mesmerize_lo'),
      thumbPath: '',
      alt: 'Animation!!',
      text: '',
      description: ``
    };
  }

  getPublished(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('adm_publish_01_hi'),
        loPath: this.getImagePath('adm_publish_01_lo'),
        thumbPath: '',
        alt: '',
        text: 'Pg 60-61',
        description: ``
      },
      {
        hiPath: this.getImagePath('adm_publish_02_hi'),
        loPath: this.getImagePath('adm_publish_02_lo'),
        thumbPath: '',
        alt: '',
        text: 'Pg 62-63',
        description: ``
      }
    ];
  }

}
