import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { MetaTagService } from 'src/app/shared/services/meta-tag.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles = [];

  constructor(
    private _articlesService: ArticlesService,
    private title: Title,
    private meta: Meta,
    private _imgLocationService: ImageLocationService,
    private _metaTagService: MetaTagService
    ) { }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => {
        this.articles = data.filter(a => !a.internal);
        this.articles.reverse();
      });
      
    this._metaTagService.updateMeta(
      this.title,
      this.meta,
      'Paint In Bits',
      'An online collection of all my drawings.',
      this.getImagePath('page_banner')
    );
  }

  formatDate(date: string): string {
    return this._articlesService.formatDate(date);
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
