import { Component, OnInit } from '@angular/core';
import { ProjectEtchService } from '../services/project-etch.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-project-etch',
  templateUrl: './project-etch.component.html',
  styleUrls: ['./project-etch.component.css']
})
export class ProjectEtchComponent implements OnInit {

  public etchAllImg: IImage;
  public slideImages: IImage[];

  constructor(private _etchService: ProjectEtchService) { }

  ngOnInit(): void {
    this.etchAllImg = this._etchService.getAll();
    this.slideImages = this._etchService.getSlides();
  }

}
