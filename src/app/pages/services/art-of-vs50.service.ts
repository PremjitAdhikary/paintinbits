import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ArtOfVs50Service {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getMesmerizeVs50Ram(): IImage {
    return {
      hiPath: this.getImagePath('avf_mesmerize_vs50_ram_hi'),
      loPath: this.getImagePath('avf_mesmerize_vs50_ram_lo'),
      thumbPath: '',
      alt: 'Lord Ram in Vs 50',
      text: '',
      description: ``
    };
  }

  getMesmerizeVs50Preview(): IImage {
    return {
      hiPath: this.getImagePath('avf_mesmerize_vs50_preview_hi'),
      loPath: this.getImagePath('avf_mesmerize_vs50_preview_lo'),
      thumbPath: '',
      alt: 'Vs 50 animated preview',
      text: '',
      description: ``
    };
  }

  getMesmerizeVsSimCombatPreview(): IImage {
    return {
      hiPath: this.getImagePath('avf_mesmerize_sim_combat_preview_hi'),
      loPath: this.getImagePath('avf_mesmerize_sim_combat_preview_lo'),
      thumbPath: '',
      alt: 'Vs 50 animated preview',
      text: '',
      description: ``
    };
  }

  getRamRunPreview(): IImage {
    return {
      hiPath: this.getImagePath('avf_ram_run_hi'),
      loPath: this.getImagePath('avf_ram_run_lo'),
      thumbPath: '',
      alt: 'Lord Ram run animated',
      text: '',
      description: ``
    };
  }

  getCharacterStudy(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('avf_study_ram_hi'),
        loPath: this.getImagePath('avf_study_ram_lo'),
        thumbPath: '',
        alt: 'Lord Ram',
        text: 'Charater study for Lord Ram',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('avf_study_vanara_hi'),
        loPath: this.getImagePath('avf_study_vanara_lo'),
        thumbPath: '',
        alt: 'Vanara',
        text: 'Charater study for Vanara',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('avf_study_jambuvan_hi'),
        loPath: this.getImagePath('avf_study_jambuvan_lo'),
        thumbPath: '',
        alt: 'Jambuvan',
        text: 'Charater study for Jambuvan',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('avf_study_vali_hi'),
        loPath: this.getImagePath('avf_study_vali_lo'),
        thumbPath: '',
        alt: 'Vali',
        text: 'Charater study for Vali',
        description: ``
      }
    ];
  }

  getGameArt(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('avf_art_kishkindha_hi'),
        loPath: this.getImagePath('avf_art_kishkindha_lo'),
        thumbPath: '',
        alt: 'Kishkindha',
        text: 'Overlooking the forests of Kishkindha',
        description: ``
      }, 
      {
        hiPath: this.getImagePath('avf_art_menu_hi'),
        loPath: this.getImagePath('avf_art_menu_lo'),
        thumbPath: '',
        alt: 'Kishkindha Path',
        text: 'Exploring the forests of Kishkindha',
        description: ``
      }
    ];
  }

}
