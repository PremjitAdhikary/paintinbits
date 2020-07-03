import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { ProjectSkinService } from '../services/project-skin.service';

@Component({
  selector: 'app-project-skin',
  templateUrl: './project-skin.component.html',
  styleUrls: ['./project-skin.component.css']
})
export class ProjectSkinComponent implements OnInit {

  public skinImg: IImage;
  public avatarImg: IImage;
  public wallpaperImg: IImage;
  public makingVdo: string;

  constructor(private _prjSkinService: ProjectSkinService) {
    this.skinImg = this._prjSkinService.getSkinImage();
    this.avatarImg = this._prjSkinService.getAvatarImage();
    this.wallpaperImg = this._prjSkinService.getWallpaperImage();
    this.makingVdo = this._prjSkinService.getMakingVdo();
  }

  ngOnInit(): void { }

}
