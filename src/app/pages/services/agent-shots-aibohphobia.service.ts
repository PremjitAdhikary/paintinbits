import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class AgentShotsAibohphobiaService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('aibohphobia_cover_hi'),
        loPath: this.getImagePath('aibohphobia_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aibohphobia_01_hi'),
        loPath: this.getImagePath('aibohphobia_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aibohphobia_02_hi'),
        loPath: this.getImagePath('aibohphobia_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aibohphobia_03_hi'),
        loPath: this.getImagePath('aibohphobia_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aibohphobia_04_hi'),
        loPath: this.getImagePath('aibohphobia_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('aibohphobia_05_hi'),
        loPath: this.getImagePath('aibohphobia_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
     ];
  }

}
