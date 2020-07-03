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
        desktopPath: this.getImagePath('third_01_desk'),
        tabPath: this.getImagePath('third_01_tab'),
        mobilePath: this.getImagePath('third_01_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_02a_desk'),
        tabPath: this.getImagePath('third_02a_tab'),
        mobilePath: this.getImagePath('third_02a_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_02b_desk'),
        tabPath: this.getImagePath('third_02b_tab'),
        mobilePath: this.getImagePath('third_02b_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_03_desk'),
        tabPath: this.getImagePath('third_03_tab'),
        mobilePath: this.getImagePath('third_03_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_04_desk'),
        tabPath: this.getImagePath('third_04_tab'),
        mobilePath: this.getImagePath('third_04_mob'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
    ];
  }

  getStrip1Inspiration(): IImage {
    return {
      desktopPath: this.getImagePath('third_01_inspire_desk'),
      tabPath: this.getImagePath('third_01_inspire_tab'),
      mobilePath: this.getImagePath('third_01_inspire_mob'),
      thumbPath: '',
      alt: 'Inspiration',
      text: '',
      description: ``
    };
  }

  getStrip1Slide(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('third_01_1_desk'),
        tabPath: this.getImagePath('third_01_1_tab'),
        mobilePath: this.getImagePath('third_01_1_mob'),
        thumbPath: this.getImagePath('third_01_1_thumb'),
        alt: 'Step 1',
        text: 'Pencils or Outline',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_2_desk'),
        tabPath: this.getImagePath('third_01_2_tab'),
        mobilePath: this.getImagePath('third_01_2_mob'),
        thumbPath: this.getImagePath('third_01_2_thumb'),
        alt: 'Step 2',
        text: 'Base colors for the Characters',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_3_desk'),
        tabPath: this.getImagePath('third_01_3_tab'),
        mobilePath: this.getImagePath('third_01_3_mob'),
        thumbPath: this.getImagePath('third_01_3_thumb'),
        alt: 'Step 3',
        text: 'Layout the Background',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_4_desk'),
        tabPath: this.getImagePath('third_01_4_tab'),
        mobilePath: this.getImagePath('third_01_4_mob'),
        thumbPath: this.getImagePath('third_01_4_thumb'),
        alt: 'Step 4',
        text: 'Detail out the Background',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_5_desk'),
        tabPath: this.getImagePath('third_01_5_tab'),
        mobilePath: this.getImagePath('third_01_5_mob'),
        thumbPath: this.getImagePath('third_01_5_thumb'),
        alt: 'Step 5',
        text: 'Lights and Shadows',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_6_desk'),
        tabPath: this.getImagePath('third_01_6_tab'),
        mobilePath: this.getImagePath('third_01_6_mob'),
        thumbPath: this.getImagePath('third_01_6_thumb'),
        alt: 'Step 6',
        text: 'Finishing touch',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_01_7_desk'),
        tabPath: this.getImagePath('third_01_7_tab'),
        mobilePath: this.getImagePath('third_01_7_mob'),
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
        desktopPath: this.getImagePath('third_strange_1_desk'),
        tabPath: this.getImagePath('third_strange_1_tab'),
        mobilePath: this.getImagePath('third_strange_1_mob'),
        thumbPath: this.getImagePath('third_strange_1_thumb'),
        alt: 'Inspiration',
        text: 'Inspiration from the Movie',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_2_desk'),
        tabPath: this.getImagePath('third_strange_2_tab'),
        mobilePath: this.getImagePath('third_strange_2_mob'),
        thumbPath: this.getImagePath('third_strange_2_thumb'),
        alt: 'Step 1',
        text: 'Pencils',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_3_desk'),
        tabPath: this.getImagePath('third_strange_3_tab'),
        mobilePath: this.getImagePath('third_strange_3_mob'),
        thumbPath: this.getImagePath('third_strange_3_thumb'),
        alt: 'Step 2',
        text: 'Blacks',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_4_desk'),
        tabPath: this.getImagePath('third_strange_4_tab'),
        mobilePath: this.getImagePath('third_strange_4_mob'),
        thumbPath: this.getImagePath('third_strange_4_thumb'),
        alt: 'Step 3',
        text: 'Colors',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_5_desk'),
        tabPath: this.getImagePath('third_strange_5_tab'),
        mobilePath: this.getImagePath('third_strange_5_mob'),
        thumbPath: this.getImagePath('third_strange_5_thumb'),
        alt: 'Step 4',
        text: 'Lights and Shadows',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_6_desk'),
        tabPath: this.getImagePath('third_strange_6_tab'),
        mobilePath: this.getImagePath('third_strange_6_mob'),
        thumbPath: this.getImagePath('third_strange_6_thumb'),
        alt: 'Step 5',
        text: 'Background',
        description: ``
      },
      {
        desktopPath: this.getImagePath('third_strange_7_desk'),
        tabPath: this.getImagePath('third_strange_7_tab'),
        mobilePath: this.getImagePath('third_strange_7_mob'),
        thumbPath: this.getImagePath('third_strange_7_thumb'),
        alt: 'Step 6',
        text: 'Background Details',
        description: ``
      }
    ];
  }

  getStrip3Inspiration(): IImage {
    return {
      desktopPath: this.getImagePath('third_03_inspire_desk'),
      tabPath: this.getImagePath('third_03_inspire_tab'),
      mobilePath: this.getImagePath('third_03_inspire_mob'),
      thumbPath: '',
      alt: 'Inspiration',
      text: '',
      description: ``
    };
  }

  getStrip4Blacks(): IImage {
    return {
      desktopPath: this.getImagePath('third_04_black_desk'),
      tabPath: this.getImagePath('third_04_black_tab'),
      mobilePath: this.getImagePath('third_04_black_mob'),
      thumbPath: '',
      alt: 'Blacks',
      text: '',
      description: ``
    };
  }
}
