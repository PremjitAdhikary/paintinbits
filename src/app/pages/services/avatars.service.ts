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
      desktopPath: this.getImagePath('avatar_01_desk'),
      tabPath: this.getImagePath('avatar_01_tab'),
      mobilePath: this.getImagePath('avatar_01_mob'),
      thumbPath: '',
      alt: '1st avatar',
      text: '',
      description: ''
    };
  }

  getChicagoAvatar(): IImage {
    return {
      desktopPath: this.getImagePath('avatar_02_desk'),
      tabPath: this.getImagePath('avatar_02_tab'),
      mobilePath: this.getImagePath('avatar_02_mob'),
      thumbPath: '',
      alt: 'In Chicago',
      text: '',
      description: ''
    };
  }

  getCedarPointAvatar(): IImage {
    return {
      desktopPath: this.getImagePath('avatar_03_desk'),
      tabPath: this.getImagePath('avatar_03_tab'),
      mobilePath: this.getImagePath('avatar_03_mob'),
      thumbPath: '',
      alt: 'In Cedar Point',
      text: '',
      description: ''
    };
  }

  getRaftingAvatar(): IImage {
    return {
      desktopPath: this.getImagePath('avatar_04_desk'),
      tabPath: this.getImagePath('avatar_04_tab'),
      mobilePath: this.getImagePath('avatar_04_mob'),
      thumbPath: '',
      alt: 'Raft Away',
      text: '',
      description: ''
    };
  }

  getTravellingAvatars(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('avatar_05_desk'),
        tabPath: this.getImagePath('avatar_05_tab'),
        mobilePath: this.getImagePath('avatar_05_mob'),
        thumbPath: '',
        alt: 'Smoky Trip',
        text: '',
        description: ''
      },
      {
        desktopPath: this.getImagePath('avatar_06_desk'),
        tabPath: this.getImagePath('avatar_06_tab'),
        mobilePath: this.getImagePath('avatar_06_mob'),
        thumbPath: '',
        alt: 'Devil Trip',
        text: '',
        description: ''
      },
      {
        desktopPath: this.getImagePath('avatar_07_desk'),
        tabPath: this.getImagePath('avatar_07_tab'),
        mobilePath: this.getImagePath('avatar_07_mob'),
        thumbPath: '',
        alt: 'Miami Trip',
        text: '',
        description: ''
      },
      {
        desktopPath: this.getImagePath('avatar_08_desk'),
        tabPath: this.getImagePath('avatar_08_tab'),
        mobilePath: this.getImagePath('avatar_08_mob'),
        thumbPath: '',
        alt: 'Las Vegas',
        text: '',
        description: ''
      }
    ];
  }

  getLaAvatar(): IImage {
    return {
      desktopPath: this.getImagePath('avatar_09_desk'),
      tabPath: this.getImagePath('avatar_09_tab'),
      mobilePath: this.getImagePath('avatar_09_mob'),
      thumbPath: '',
      alt: 'Las Vegas',
      text: '',
      description: ''
    };
  }

  getLastAvatar(): IImage {
    return {
      desktopPath: this.getImagePath('avatar_10_desk'),
      tabPath: this.getImagePath('avatar_10_tab'),
      mobilePath: this.getImagePath('avatar_10_mob'),
      thumbPath: '',
      alt: 'Las Vegas',
      text: '',
      description: ''
    };
  }
}
