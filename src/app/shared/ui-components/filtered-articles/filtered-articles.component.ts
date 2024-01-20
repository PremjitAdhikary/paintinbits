import { Component, OnInit, Input, Inject } from '@angular/core';
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
    private _articlesService : ArticlesService,
    private _imgLocationService: ImageLocationService) { }

  ngOnInit(): void {
    this._articlesService.getArticles()
      .subscribe(data => 
        this.filteredArticles = data.filter(d => d.tag == this.tag));
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
