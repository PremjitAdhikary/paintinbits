import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ThirdDigitalComicService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('third_01_hi'),
        loPath: this.getImagePath('third_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_02a_hi'),
        loPath: this.getImagePath('third_02a_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_02b_hi'),
        loPath: this.getImagePath('third_02b_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_03_hi'),
        loPath: this.getImagePath('third_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_04_hi'),
        loPath: this.getImagePath('third_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
    ];
  }

  getStrip1Inspiration(): IImage {
    return {
      hiPath: this.getImagePath('third_01_inspire_hi'),
      loPath: this.getImagePath('third_01_inspire_lo'),
      thumbPath: '',
      alt: 'Inspiration',
      text: '',
      description: ``
    };
  }

  getStrip1Slide(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('third_01_1_hi'),
        loPath: this.getImagePath('third_01_1_lo'),
        thumbPath: this.getImagePath('third_01_1_thumb'),
        alt: 'Step 1',
        text: 'Pencils or Outline',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_2_hi'),
        loPath: this.getImagePath('third_01_2_lo'),
        thumbPath: this.getImagePath('third_01_2_thumb'),
        alt: 'Step 2',
        text: 'Base colors for the Characters',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_3_hi'),
        loPath: this.getImagePath('third_01_3_lo'),
        thumbPath: this.getImagePath('third_01_3_thumb'),
        alt: 'Step 3',
        text: 'Layout the Background',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_4_hi'),
        loPath: this.getImagePath('third_01_4_lo'),
        thumbPath: this.getImagePath('third_01_4_thumb'),
        alt: 'Step 4',
        text: 'Detail out the Background',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_5_hi'),
        loPath: this.getImagePath('third_01_5_lo'),
        thumbPath: this.getImagePath('third_01_5_thumb'),
        alt: 'Step 5',
        text: 'Lights and Shadows',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_6_hi'),
        loPath: this.getImagePath('third_01_6_lo'),
        thumbPath: this.getImagePath('third_01_6_thumb'),
        alt: 'Step 6',
        text: 'Finishing touch',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_01_7_hi'),
        loPath: this.getImagePath('third_01_7_lo'),
        thumbPath: this.getImagePath('third_01_7_thumb'),
        alt: 'Step 7',
        text: 'Add Text',
        description: ``
      }
    ];
  }

  getStrangeSlide(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('third_strange_1_hi'),
        loPath: this.getImagePath('third_strange_1_lo'),
        thumbPath: this.getImagePath('third_strange_1_thumb'),
        alt: 'Inspiration',
        text: 'Inspiration from the Movie',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_2_hi'),
        loPath: this.getImagePath('third_strange_2_lo'),
        thumbPath: this.getImagePath('third_strange_2_thumb'),
        alt: 'Step 1',
        text: 'Pencils',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_3_hi'),
        loPath: this.getImagePath('third_strange_3_lo'),
        thumbPath: this.getImagePath('third_strange_3_thumb'),
        alt: 'Step 2',
        text: 'Blacks',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_4_hi'),
        loPath: this.getImagePath('third_strange_4_lo'),
        thumbPath: this.getImagePath('third_strange_4_thumb'),
        alt: 'Step 3',
        text: 'Colors',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_5_hi'),
        loPath: this.getImagePath('third_strange_5_lo'),
        thumbPath: this.getImagePath('third_strange_5_thumb'),
        alt: 'Step 4',
        text: 'Lights and Shadows',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_6_hi'),
        loPath: this.getImagePath('third_strange_6_lo'),
        thumbPath: this.getImagePath('third_strange_6_thumb'),
        alt: 'Step 5',
        text: 'Background',
        description: ``
      },
      {
        hiPath: this.getImagePath('third_strange_7_hi'),
        loPath: this.getImagePath('third_strange_7_lo'),
        thumbPath: this.getImagePath('third_strange_7_thumb'),
        alt: 'Step 6',
        text: 'Background Details',
        description: ``
      }
    ];
  }

  getStrip3Inspiration(): IImage {
    return {
      hiPath: this.getImagePath('third_03_inspire_hi'),
      loPath: this.getImagePath('third_03_inspire_lo'),
      thumbPath: '',
      alt: 'Inspiration',
      text: '',
      description: ``
    };
  }

  getStrip4Blacks(): IImage {
    return {
      hiPath: this.getImagePath('third_04_black_hi'),
      loPath: this.getImagePath('third_04_black_lo'),
      thumbPath: '',
      alt: 'Blacks',
      text: '',
      description: ``
    };
  }
}
