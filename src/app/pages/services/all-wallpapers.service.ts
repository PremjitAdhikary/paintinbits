import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';
import { IDownloadLink } from 'src/app/shared/domain/download-link';

@Injectable({
  providedIn: 'root'
})
export class AllWallpapersService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getDesktopWallpapers(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('etch_wallpaper_uhd_hi'),
        loPath: this.getImagePath('etch_wallpaper_uhd_lo'),
        thumbPath: this.getImagePath('etch_wallpaper_uhd_th'),
        alt: 'All Together',
        text: 'Project Etch : All Together',
        description: `Desktop Wallpaper with all character art from _Project Etch_`
      },
      {
        hiPath: this.getImagePath('agent_wallpaper_uhd_hi'),
        loPath: this.getImagePath('agent_wallpaper_uhd_lo'),
        thumbPath: this.getImagePath('agent_wallpaper_uhd_th'),
        alt: 'License to Sanitize',
        text: 'An Agent : License to Sanitize',
        description: `Desktop Wallpaper from comics _An Agent : License to Sanitize_`
      },
      {
        hiPath: this.getImagePath('avf_wallpaper_01_uhd_hi'),
        loPath: this.getImagePath('avf_wallpaper_01_uhd_lo'),
        thumbPath: this.getImagePath('avf_wallpaper_01_uhd_th'),
        alt: 'Through the Forest',
        text: 'Vs 50 : Through the Forest',
        description: `Desktop Wallpaper of KishKindha Forest from the game _Vs 50_`
      },
      {
        hiPath: this.getImagePath('avf_wallpaper_02_uhd_hi'),
        loPath: this.getImagePath('avf_wallpaper_02_uhd_lo'),
        thumbPath: this.getImagePath('avf_wallpaper_02_uhd_th'),
        alt: 'KishKindha Morning',
        text: 'Vs 50 : KishKindha Morning',
        description: `Desktop Wallpaper of a morning in KishKindha from the game _Vs 50_`
      },
      {
        hiPath: this.getImagePath('aibohphobia_wallpaper_uhd_hi'),
        loPath: this.getImagePath('aibohphobia_wallpaper_uhd_lo'),
        thumbPath: this.getImagePath('aibohphobia_wallpaper_uhd_th'),
        alt: 'Aibohphobia',
        text: 'Agent Shots : Aibohphobia',
        description: `Desktop Wallpaper from comics _Agent Shots : Aibohphobia_`
      },
      {
        hiPath: this.getImagePath('ib_wallpaper_uhd_hi'),
        loPath: this.getImagePath('ib_wallpaper_uhd_lo'),
        thumbPath: this.getImagePath('ib_wallpaper_uhd_th'),
        alt: 'Inner Brahma',
        text: 'Inner Brahma',
        description: `Desktop Wallpaper from comics _Inner Brahma_`
      },
      {
        hiPath: this.getImagePath('patience_wallpaper_uhd_hi'),
        loPath: this.getImagePath('patience_wallpaper_uhd_lo'),
        thumbPath: this.getImagePath('patience_wallpaper_uhd_th'),
        alt: 'Patience',
        text: 'Agent Shots : Patience',
        description: `Desktop Wallpaper from comics _Agent Shots : Patience_`
      },
      {
        hiPath: this.getImagePath('agent_sydney_wallpaper_mqhd_hi'),
        loPath: this.getImagePath('agent_sydney_wallpaper_mqhd_lo'),
        thumbPath: this.getImagePath('agent_sydney_wallpaper_mqhd_th'),
        alt: 'An Agent in Sydney',
        text: 'An Agent in Sydney',
        description: `Desktop Wallpaper based on _An Agent_`
      }
    ];
  }

  getDesktopWallpapersDownloadLinks(): IDownloadLink[] {
    return [
      {
        downloadPath: this.getImagePath('etch_wallpaper_uhd'),
        downloadDisplay: "All Together",
        downloadFileName: "Project_Etch_All_Together(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('agent_wallpaper_uhd'),
        downloadDisplay: "License to Sanitize",
        downloadFileName: "An_Agent_License_to_Sanitize(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('avf_wallpaper_01_uhd'),
        downloadDisplay: "Through the KishKindha Forest",
        downloadFileName: "vs_50_through_KishKindha_Forest(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('avf_wallpaper_02_uhd'),
        downloadDisplay: "Morning in KishKindha Forest",
        downloadFileName: "vs_50_morning_KishKindha_Forest(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('aibohphobia_wallpaper_uhd'),
        downloadDisplay: "Aibohphobia",
        downloadFileName: "An_Agent_Aibohphobia(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('ib_wallpaper_uhd'),
        downloadDisplay: "Inner Brahma",
        downloadFileName: "Inner_Brahma(UHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('patience_wallpaper_uhd'),
        downloadDisplay: "Patience",
        downloadFileName: "An_Agent_Patience(UHD).jpg"
      }
    ];
  }

  getMobileWallpapers(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('agent_wallpaper_mqhd_hi'),
        loPath: this.getImagePath('agent_wallpaper_mqhd_lo'),
        thumbPath: this.getImagePath('agent_wallpaper_mqhd_th'),
        alt: 'License to Sanitize',
        text: 'An Agent : License to Sanitize',
        description: `Mobile Device Wallpaper from comics _An Agent : License to Sanitize_`
      },
      {
        hiPath: this.getImagePath('aibohphobia_wallpaper_mqhd_hi'),
        loPath: this.getImagePath('aibohphobia_wallpaper_mqhd_lo'),
        thumbPath: this.getImagePath('aibohphobia_wallpaper_mqhd_th'),
        alt: 'Aibohphobia',
        text: 'Agent Shots : Aibohphobia',
        description: `Mobile Device Wallpaper from comics _Agent Shots : Aibohphobia_`
      },
      {
        hiPath: this.getImagePath('ib_wallpaper_01_mqhd_hi'),
        loPath: this.getImagePath('ib_wallpaper_01_mqhd_lo'),
        thumbPath: this.getImagePath('ib_wallpaper_01_mqhd_th'),
        alt: 'Inner Brahma',
        text: 'Inner Brahma : Meditate',
        description: `Mobile Device Wallpaper from comics _Inner Brahma_`
      },
      {
        hiPath: this.getImagePath('ib_wallpaper_02_mqhd_hi'),
        loPath: this.getImagePath('ib_wallpaper_02_mqhd_lo'),
        thumbPath: this.getImagePath('ib_wallpaper_02_mqhd_th'),
        alt: 'Inner Brahma',
        text: 'Inner Brahma : Symbol',
        description: `Mobile Device Wallpaper from comics _Inner Brahma_`
      },
      {
        hiPath: this.getImagePath('patience_wallpaper_mqhd_hi'),
        loPath: this.getImagePath('patience_wallpaper_mqhd_lo'),
        thumbPath: this.getImagePath('patience_wallpaper_mqhd_th'),
        alt: 'Patience',
        text: 'Agent Shots : Patience',
        description: `Mobile Device Wallpaper from comics _Agent Shots : Patience_`
      }
    ];
  }

  getMobileWallpapersDownloadLinks(): IDownloadLink[] {
    return [
      {
        downloadPath: this.getImagePath('agent_wallpaper_mqhd'),
        downloadDisplay: "License to Sanitize",
        downloadFileName: "An_Agent_License_to_Sanitize(MQHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('aibohphobia_wallpaper_mqhd'),
        downloadDisplay: "Aibohphobia",
        downloadFileName: "An_Agent_Aibohphobia(MQHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('ib_wallpaper_01_mqhd'),
        downloadDisplay: "Inner Brahma Meditate",
        downloadFileName: "Inner_Brahma_Meditate(MQHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('ib_wallpaper_02_mqhd'),
        downloadDisplay: "Inner Brahma Symbol",
        downloadFileName: "Inner_Brahma_Symbol(MQHD).jpg"
      }, 
      {
        downloadPath: this.getImagePath('patience_wallpaper_mqhd'),
        downloadDisplay: "Patience",
        downloadFileName: "An_Agent_Patience(MQHD).jpg"
      }
    ];
  }

}
