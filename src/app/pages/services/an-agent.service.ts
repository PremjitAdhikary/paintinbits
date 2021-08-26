import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class AnAgentService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getXtra(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('xtra_01_hi'),
        loPath: this.getImagePath('xtra_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: `__Architecture Drawing__ This is from the second page of the comic. The 
        white spaces are where the other panels go.`
      }, 
      {
        hiPath: this.getImagePath('xtra_02_hi'),
        loPath: this.getImagePath('xtra_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: `__Intermediate Drawing__ This is from page 8. The other panels added to 
        this page hide the tree in the final page.`
      }, 
      {
        hiPath: this.getImagePath('xtra_03_hi'),
        loPath: this.getImagePath('xtra_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: `_Medley_ of sorts. Got my daughter to color a bit. And for the Security Cam 
        shot, as you can see, a _lot of planning_ was done.`
      }
    ];
  }

  getComic(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('agent_cover_hi'),
        loPath: this.getImagePath('agent_cover_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_01_hi'),
        loPath: this.getImagePath('agent_01_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_02_hi'),
        loPath: this.getImagePath('agent_02_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_03_hi'),
        loPath: this.getImagePath('agent_03_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_04_hi'),
        loPath: this.getImagePath('agent_04_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_05_hi'),
        loPath: this.getImagePath('agent_05_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_06_hi'),
        loPath: this.getImagePath('agent_06_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_07_hi'),
        loPath: this.getImagePath('agent_07_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_08_hi'),
        loPath: this.getImagePath('agent_08_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_09_hi'),
        loPath: this.getImagePath('agent_09_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_10_hi'),
        loPath: this.getImagePath('agent_10_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_11_hi'),
        loPath: this.getImagePath('agent_11_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_12_hi'),
        loPath: this.getImagePath('agent_12_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_13_hi'),
        loPath: this.getImagePath('agent_13_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_14_hi'),
        loPath: this.getImagePath('agent_14_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_15_hi'),
        loPath: this.getImagePath('agent_15_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_16_hi'),
        loPath: this.getImagePath('agent_16_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_17_hi'),
        loPath: this.getImagePath('agent_17_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      },
      {
        hiPath: this.getImagePath('agent_18_hi'),
        loPath: this.getImagePath('agent_18_lo'),
        thumbPath: '',
        alt: '',
        text: '',
        description: ``
      }
    ];
  }
  
}
