import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class MakingStoriesService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getPublished(): IImage {
    return {
      hiPath: this.getImagePath('ms_publish_hi'),
      loPath: this.getImagePath('ms_publish_lo'),
      thumbPath: '',
      alt: 'Gogona 2025',
      text: '',
      description: ``
    };
  }

  getCovers(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('gogona_cover_hi'),
        loPath: this.getImagePath('gogona_cover_lo'),
        thumbPath: '',
        alt: '',
        text: 'Cover for Gogona 2025',
        description: `For those who are not aware, what she holds in her hand, a musical 
        instrument, is called Gogona.`
      },
      {
        hiPath: this.getImagePath('gogona_backcover_hi'),
        loPath: this.getImagePath('gogona_backcover_lo'),
        thumbPath: '',
        alt: '',
        text: 'Back Cover for Gogona 2025',
        description: `My original idea was much different than this. Later I got to know that 
        sponsors had requested the back cover page for their advertisement. The art that I would 
        do would go as _inside back cover_. So I simplified the idea to Bihu nasoni (Bihu 
        dancers) dancing around.`
      }
    ];
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('ms_cover_hi'),
        loPath: this.getImagePath('ms_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ms_00_hi'),
        loPath: this.getImagePath('ms_00_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('ms_01_hi'),
        loPath: this.getImagePath('ms_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_02_hi'),
        loPath: this.getImagePath('ms_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_03_hi'),
        loPath: this.getImagePath('ms_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_04_hi'),
        loPath: this.getImagePath('ms_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_05_hi'),
        loPath: this.getImagePath('ms_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_06_hi'),
        loPath: this.getImagePath('ms_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_07_hi'),
        loPath: this.getImagePath('ms_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('ms_end_hi'),
        loPath: this.getImagePath('ms_end_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }

}
