import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ArticlesService } from '../../services/articles.service';
import { IArticle } from '../../domain/article';
import { ImageLocationService } from '../../services/image-location.service';
import { MetaTagService } from '../../services/meta-tag.service';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input() public id = 0;
  @Input() public custom = false;
  public article: IArticle;

  constructor(
    private _articlesService : ArticlesService,
    private title: Title,
    private meta: Meta,
    private _imgLocationService: ImageLocationService,
    private _metaTagService: MetaTagService
    ) { 
  }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => {
        this.article = data.filter(d => d.id == this.id)[0];
        this._metaTagService.updateMeta(
          this.title,
          this.meta,
          this.article.name,
          this.article.description,
          this.getImagePath(this.article.preview)
        );
      });
  }

  formatDate(date: string): string {
    return this._articlesService.formatDate(date);
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
