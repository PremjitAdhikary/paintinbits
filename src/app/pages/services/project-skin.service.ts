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
      desktopPath: this.getImagePath('projectskin_skin_desk'),
      tabPath: this.getImagePath('projectskin_skin_tab'),
      mobilePath: this.getImagePath('projectskin_skin_mob'),
      thumbPath: '',
      alt: 'The Skin',
      text: '',
      description: ''
    };
  }

  getAvatarImage(): IImage {
    return {
      desktopPath: this.getImagePath('projectskin_avatar_desk'),
      tabPath: this.getImagePath('projectskin_avatar_tab'),
      mobilePath: this.getImagePath('projectskin_avatar_mob'),
      thumbPath: '',
      alt: 'The Avatar',
      text: '',
      description: ''
    };
  }

  getWallpaperImage(): IImage {
    return {
      desktopPath: this.getImagePath('projectskin_wallpaper_desk'),
      tabPath: this.getImagePath('projectskin_wallpaper_tab'),
      mobilePath: this.getImagePath('projectskin_wallpaper_mob'),
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
