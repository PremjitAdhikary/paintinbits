import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { IArticle } from '../../domain/article';
import { ImageLocationService } from '../../services/image-location.service';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input() public id = 0;
  public article: IArticle;

  constructor(
    private _articlesService : ArticlesService,
    private _imgLocationService: ImageLocationService
    ) { 
  }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => {
        this.article = data.filter(d => d.id == this.id)[0];
      });
  }

  formatDate(date: string): string {
    return this._articlesService.formatDate(date);
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
