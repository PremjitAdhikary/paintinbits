import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles = [];

  constructor(
    private _articlesService: ArticlesService,
    private _imgLocationService: ImageLocationService
    ) { }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => {
        this.articles = data;
        this.articles.reverse();
      });
  }

  formatDate(date: string): string {
    return this._articlesService.formatDate(date);
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
