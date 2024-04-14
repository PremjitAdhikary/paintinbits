import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { InnerBrahmaService } from '../services/inner-brahma.service';

@Component({
  selector: 'app-inner-brahma',
  templateUrl: './inner-brahma.component.html',
  styleUrls: ['./inner-brahma.component.css']
})
export class InnerBrahmaComponent implements OnInit {
  
  public comics: IImage[];

  public published: IImage;

  constructor(private _innerBrahmaService: InnerBrahmaService) { }

  ngOnInit(): void {
    this.comics = this._innerBrahmaService.getComic();
    this.published = this._innerBrahmaService.getPublished();
  }

}
