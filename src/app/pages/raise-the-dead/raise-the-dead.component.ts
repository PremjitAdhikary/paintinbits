import { Component, OnInit } from '@angular/core';
import { RaiseTheDeadService } from '../services/raise-the-dead.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-raise-the-dead',
  templateUrl: './raise-the-dead.component.html',
  styleUrls: ['./raise-the-dead.component.css']
})
export class RaiseTheDeadComponent implements OnInit {

  public finalImg: IImage;
  public slideImages: IImage[];

  constructor(private _raiseService: RaiseTheDeadService) { }

  ngOnInit(): void {
    this.finalImg = this._raiseService.getFinalImage();
    this.slideImages = this._raiseService.getSlideImages();
  }

}
