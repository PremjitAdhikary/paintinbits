import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../shared/services/articles.service';
import { IArticle } from '../../shared/domain/article';
import { ImageLocationService } from '../../shared/services/image-location.service';

@Component({
  selector: 'app-article-published',
  templateUrl: './article-published.component.html',
  styleUrls: ['./article-published.component.css']
})
export class ArticlePublishedComponent implements OnInit {

  public publishedArticles: IArticle[] = [];

  constructor(
    private _articlesService : ArticlesService,
    private _imgLocationService: ImageLocationService) { }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => 
        this.publishedArticles = data.filter(d => d.published));
  }
  
  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
