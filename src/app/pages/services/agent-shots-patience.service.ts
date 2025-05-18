import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class AgentShotsPatienceService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComicDouble(): IImage[] {
    return [{
      hiPath: this.getImagePath('patience_04_05_hi'),
      loPath: this.getImagePath('patience_04_05_lo'),
      thumbPath: '',
      alt: '',
      text: '',
      description: ``
    }];
  }

  getComicSingle(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('patience_cover_hi'),
        loPath: this.getImagePath('patience_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_01_hi'),
        loPath: this.getImagePath('patience_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_02_hi'),
        loPath: this.getImagePath('patience_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_03_hi'),
        loPath: this.getImagePath('patience_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_04_hi'),
        loPath: this.getImagePath('patience_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_05_hi'),
        loPath: this.getImagePath('patience_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_06_hi'),
        loPath: this.getImagePath('patience_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('patience_07_hi'),
        loPath: this.getImagePath('patience_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
     ];
  }

  getMaking() : IImage[] {
    return [{
      hiPath: this.getImagePath('patience_making_01_hi'),
      loPath: this.getImagePath('patience_making_01_lo'),
      thumbPath: '',
      alt: 'Page 1, Page 2, Page 3',
      text: 'Page 1, Page 2, Page 3',
      description: `Scripts and thumbnails for the first three pages.`
    }, 
    {
      hiPath: this.getImagePath('patience_making_02_hi'),
      loPath: this.getImagePath('patience_making_02_lo'),
      thumbPath: '',
      alt: 'Page 4, Page 5, Page 6',
      text: 'Page 4, Page 5, Page 6',
      description: `Scripts and thumbnails for the next three pages.  Page 4 and 5 is a double 
      page layout.`
    }];
  }
}
