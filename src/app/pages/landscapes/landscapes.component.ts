import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { LandscapesService } from '../services/landscapes.service';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.css']
})
export class LandscapesComponent implements OnInit {

  public landscapesFirstImg: IImage;
  public landscapesGlaciertImg: IImage;
  public slideImages: IImage[];

  constructor(private _landscapesService: LandscapesService) { }

  ngOnInit(): void {
    this.landscapesFirstImg = this._landscapesService.getFirstImage();
    this.landscapesGlaciertImg = this._landscapesService.getGlacierImage();
    this.slideImages = this._landscapesService.getSlideImages();
  }

}
