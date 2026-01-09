import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class SpeedThrillsService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComicDouble(): IImage[] {
    return [{
      hiPath: this.getImagePath('st_12_13_hi'),
      loPath: this.getImagePath('st_12_13_lo'),
      thumbPath: '',
      alt: '',
      text: '',
      description: ``
    }];
  }

  getComicSingle(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('st_cover_hi'),
        loPath: this.getImagePath('st_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_characters_hi'),
        loPath: this.getImagePath('st_characters_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_01_hi'),
        loPath: this.getImagePath('st_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_02_hi'),
        loPath: this.getImagePath('st_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_03_hi'),
        loPath: this.getImagePath('st_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_04_hi'),
        loPath: this.getImagePath('st_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_05_hi'),
        loPath: this.getImagePath('st_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_06_hi'),
        loPath: this.getImagePath('st_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_07_hi'),
        loPath: this.getImagePath('st_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_08_hi'),
        loPath: this.getImagePath('st_08_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_09_hi'),
        loPath: this.getImagePath('st_09_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('st_10_hi'),
        loPath: this.getImagePath('st_10_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_11_hi'),
        loPath: this.getImagePath('st_11_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_12_hi'),
        loPath: this.getImagePath('st_12_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_13_hi'),
        loPath: this.getImagePath('st_13_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_14_hi'),
        loPath: this.getImagePath('st_14_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_15_hi'),
        loPath: this.getImagePath('st_15_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_16_hi'),
        loPath: this.getImagePath('st_16_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_17_hi'),
        loPath: this.getImagePath('st_17_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('st_18_hi'),
        loPath: this.getImagePath('st_18_lo'),
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
        hiPath: this.getImagePath('st_making_1_hi'),
        loPath: this.getImagePath('st_making_1_lo'),
        thumbPath: '',
        alt: '',
        text: 'Painting landscapes',
        description: `A quick overview on my landscapes approach`
      }, 
      {
        hiPath: this.getImagePath('st_making_2_hi'),
        loPath: this.getImagePath('st_making_2_lo'),
        thumbPath: '',
        alt: '',
        text: 'Cars and motion',
        description: `Different camera angles and depicting motion of the racecars`
      }
    ];
  }
}
