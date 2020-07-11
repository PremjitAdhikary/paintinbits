import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ProjectSkinService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getSkinImage(): IImage {
    return {
      hiPath: this.getImagePath('projectskin_skin_hi'),
      loPath: this.getImagePath('projectskin_skin_lo'),
      thumbPath: '',
      alt: 'The Skin',
      text: '',
      description: ''
    };
  }

  getAvatarImage(): IImage {
    return {
      hiPath: this.getImagePath('projectskin_avatar_hi'),
      loPath: this.getImagePath('projectskin_avatar_lo'),
      thumbPath: '',
      alt: 'The Avatar',
      text: '',
      description: ''
    };
  }

  getWallpaperImage(): IImage {
    return {
      hiPath: this.getImagePath('projectskin_wallpaper_hi'),
      loPath: this.getImagePath('projectskin_wallpaper_lo'),
      thumbPath: '',
      alt: 'The Wallpaper',
      text: '',
      description: ''
    };
  }

  getMakingVdo(): string {
    return this.getImagePath('projectskin_vdo');
  }
}
