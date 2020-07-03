import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../domain/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private _url: string = "../../../assets/data/articles.json";

  private _months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this._url);
  }

  formatDate(date: string): string {
    let converted: Date = new Date(date);
    return '' + converted.getDate() + '-' 
      + this._months[converted.getMonth()] + '-' 
      + converted.getFullYear();
  }
}
