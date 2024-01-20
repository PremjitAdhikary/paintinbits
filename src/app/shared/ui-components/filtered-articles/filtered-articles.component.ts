import { Component, OnInit, Input, Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ArticlesService } from '../../services/articles.service';
import { IArticle } from '../../domain/article';
import { ImageLocationService } from '../../services/image-location.service';

@Component({
  selector: 'app-filtered-articles',
  templateUrl: './filtered-articles.component.html',
  styleUrls: ['./filtered-articles.component.css']
})
export class FilteredArticlesComponent implements OnInit {

  @Input() public tag: string;
  @Input() public tagname: string;
  public filteredArticles: IArticle[] = [];

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private _articlesService : ArticlesService,
    private _imgLocationService: ImageLocationService) { }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => 
        this.filteredArticles = data.filter(d => d.tag == this.tag));
  }

  getBaseRefedUrl(url) {console.log('baseRef kega:'+this.baseHref+'+'+url)
    return this.baseHref + url;
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
