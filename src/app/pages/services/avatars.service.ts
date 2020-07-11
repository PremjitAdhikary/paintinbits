import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class AvatarsService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getFirstAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_01_hi'),
      loPath: this.getImagePath('avatar_01_lo'),
      thumbPath: '',
      alt: '1st avatar',
      text: '',
      description: ''
    };
  }

  getChicagoAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_02_hi'),
      loPath: this.getImagePath('avatar_02_lo'),
      thumbPath: '',
      alt: 'In Chicago',
      text: '',
      description: ''
    };
  }

  getCedarPointAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_03_hi'),
      loPath: this.getImagePath('avatar_03_lo'),
      thumbPath: '',
      alt: 'In Cedar Point',
      text: '',
      description: ''
    };
  }

  getRaftingAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_04_hi'),
      loPath: this.getImagePath('avatar_04_lo'),
      thumbPath: '',
      alt: 'Raft Away',
      text: '',
      description: ''
    };
  }

  getTravellingAvatars(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('avatar_05_hi'),
        loPath: this.getImagePath('avatar_05_lo'),
        thumbPath: '',
        alt: 'Smoky Trip',
        text: '',
        description: ''
      },
      {
        hiPath: this.getImagePath('avatar_06_hi'),
        loPath: this.getImagePath('avatar_06_lo'),
        thumbPath: '',
        alt: 'Devil Trip',
        text: '',
        description: ''
      },
      {
        hiPath: this.getImagePath('avatar_07_hi'),
        loPath: this.getImagePath('avatar_07_lo'),
        thumbPath: '',
        alt: 'Miami Trip',
        text: '',
        description: ''
      },
      {
        hiPath: this.getImagePath('avatar_08_hi'),
        loPath: this.getImagePath('avatar_08_lo'),
        thumbPath: '',
        alt: 'Las Vegas',
        text: '',
        description: ''
      }
    ];
  }

  getLaAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_09_hi'),
      loPath: this.getImagePath('avatar_09_lo'),
      thumbPath: '',
      alt: 'Las Vegas',
      text: '',
      description: ''
    };
  }

  getLastAvatar(): IImage {
    return {
      hiPath: this.getImagePath('avatar_10_hi'),
      loPath: this.getImagePath('avatar_10_lo'),
      thumbPath: '',
      alt: 'Las Vegas',
      text: '',
      description: ''
    };
  }
}
