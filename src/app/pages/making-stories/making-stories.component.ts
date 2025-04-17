import { Component, OnInit } from '@angular/core';
import { MakingStoriesService } from '../services/making-stories.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-making-stories',
  templateUrl: './making-stories.component.html',
  styleUrls: ['./making-stories.component.css']
})
export class MakingStoriesComponent implements OnInit {

  public comics: IImage[];
  public published: IImage;
  public covers: IImage[];

  constructor(private _makingStoriesService: MakingStoriesService) { }

  ngOnInit(): void {
    this.comics = this._makingStoriesService.getComic();
    this.published = this._makingStoriesService.getPublished();
    this.covers = this._makingStoriesService.getCovers();
  }

}
