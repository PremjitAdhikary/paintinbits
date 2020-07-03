import { Component, OnInit } from '@angular/core';
import { DoodlesService } from '../services/doodles.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-doodles',
  templateUrl: './doodles.component.html',
  styleUrls: ['./doodles.component.css']
})
export class DoodlesComponent implements OnInit {

  public slideImages: IImage[];

  constructor(private _doodlesService: DoodlesService) { }

  ngOnInit(): void {
    this.slideImages = this._doodlesService.getSlide();
  }

}
