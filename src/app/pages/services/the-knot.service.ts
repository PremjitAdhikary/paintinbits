import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class TheKnotService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('tk_cover_hi'),
        loPath: this.getImagePath('tk_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p01_hi'),
        loPath: this.getImagePath('tk_p01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p02_hi'),
        loPath: this.getImagePath('tk_p02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p03_hi'),
        loPath: this.getImagePath('tk_p03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p04_hi'),
        loPath: this.getImagePath('tk_p04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p05_hi'),
        loPath: this.getImagePath('tk_p05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p06_hi'),
        loPath: this.getImagePath('tk_p06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p07_hi'),
        loPath: this.getImagePath('tk_p07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p08_hi'),
        loPath: this.getImagePath('tk_p08_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p09_hi'),
        loPath: this.getImagePath('tk_p09_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p10_hi'),
        loPath: this.getImagePath('tk_p10_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p11_hi'),
        loPath: this.getImagePath('tk_p11_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p12_hi'),
        loPath: this.getImagePath('tk_p12_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p13_hi'),
        loPath: this.getImagePath('tk_p13_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p14_hi'),
        loPath: this.getImagePath('tk_p14_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p15_hi'),
        loPath: this.getImagePath('tk_p15_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p16_hi'),
        loPath: this.getImagePath('tk_p16_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p17_hi'),
        loPath: this.getImagePath('tk_p17_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p18_hi'),
        loPath: this.getImagePath('tk_p18_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p19_hi'),
        loPath: this.getImagePath('tk_p19_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p20_hi'),
        loPath: this.getImagePath('tk_p20_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p21_hi'),
        loPath: this.getImagePath('tk_p21_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p22_hi'),
        loPath: this.getImagePath('tk_p22_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p23_hi'),
        loPath: this.getImagePath('tk_p23_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p24_hi'),
        loPath: this.getImagePath('tk_p24_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p25_hi'),
        loPath: this.getImagePath('tk_p25_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p26_hi'),
        loPath: this.getImagePath('tk_p26_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p27_hi'),
        loPath: this.getImagePath('tk_p27_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p28_hi'),
        loPath: this.getImagePath('tk_p28_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p29_hi'),
        loPath: this.getImagePath('tk_p29_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p30_hi'),
        loPath: this.getImagePath('tk_p30_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p31_hi'),
        loPath: this.getImagePath('tk_p31_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p32_hi'),
        loPath: this.getImagePath('tk_p32_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p33_hi'),
        loPath: this.getImagePath('tk_p33_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p34_hi'),
        loPath: this.getImagePath('tk_p34_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p35_hi'),
        loPath: this.getImagePath('tk_p35_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p36_hi'),
        loPath: this.getImagePath('tk_p36_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p37_hi'),
        loPath: this.getImagePath('tk_p37_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p38_hi'),
        loPath: this.getImagePath('tk_p38_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p39_hi'),
        loPath: this.getImagePath('tk_p39_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p40_hi'),
        loPath: this.getImagePath('tk_p40_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p41_hi'),
        loPath: this.getImagePath('tk_p41_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p42_hi'),
        loPath: this.getImagePath('tk_p42_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p43_hi'),
        loPath: this.getImagePath('tk_p43_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p44_hi'),
        loPath: this.getImagePath('tk_p44_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p45_hi'),
        loPath: this.getImagePath('tk_p45_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p46_hi'),
        loPath: this.getImagePath('tk_p46_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p47_hi'),
        loPath: this.getImagePath('tk_p47_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p48_hi'),
        loPath: this.getImagePath('tk_p48_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p49_hi'),
        loPath: this.getImagePath('tk_p49_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p50_hi'),
        loPath: this.getImagePath('tk_p50_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p51_hi'),
        loPath: this.getImagePath('tk_p51_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p52_hi'),
        loPath: this.getImagePath('tk_p52_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p53_hi'),
        loPath: this.getImagePath('tk_p53_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p54_hi'),
        loPath: this.getImagePath('tk_p54_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p55_hi'),
        loPath: this.getImagePath('tk_p55_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p56_hi'),
        loPath: this.getImagePath('tk_p56_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p57_hi'),
        loPath: this.getImagePath('tk_p57_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p58_hi'),
        loPath: this.getImagePath('tk_p58_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p59_hi'),
        loPath: this.getImagePath('tk_p59_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_p60_hi'),
        loPath: this.getImagePath('tk_p60_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('tk_backCover_hi'),
        loPath: this.getImagePath('tk_backCover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
     ];
  }

  getPublished(): IImage {
    return {
      hiPath: this.getImagePath('tk_three_books_hi'),
      loPath: this.getImagePath('tk_three_books_lo'),
      thumbPath: '',
      alt: 'The three printed books',
      text: '',
      description: ``
    };
  }
}
