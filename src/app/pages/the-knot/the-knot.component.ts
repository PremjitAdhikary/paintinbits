import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { TheKnotService } from '../services/the-knot.service';

@Component({
  selector: 'app-the-knot',
  templateUrl: './the-knot.component.html',
  styleUrls: ['./the-knot.component.css']
})
export class TheKnotComponent implements OnInit, AfterViewInit {
  @ViewChild('comicsHolder') comicsHolder: ElementRef;
  public comics: IImage[];
  public published: IImage;

  constructor(private _theKnotService: TheKnotService) { }

  ngOnInit(): void {
    this.comics = this._theKnotService.getComic();
    this.published = this._theKnotService.getPublished();
  }

  ngAfterViewInit() { }

  chapOne(): void {
    this.gotoPage(3);
  }

  chapTwo(): void {
    this.gotoPage(27);
  }

  chapThree(): void {
    this.gotoPage(47);
  }

  chapExtra(): void {
    this.gotoPage(54);
  }

  gotoPage(pageNumber): void {
    this.comicsHolder['currentImageIndex'] = pageNumber;
  }

}
