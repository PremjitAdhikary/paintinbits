import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-switchable-double-spread-comic-holder',
  templateUrl: './switchable-double-spread-comic-holder.component.html',
  styleUrls: ['./switchable-double-spread-comic-holder.component.css']
})
export class SwitchableDoubleSpreadComicHolderComponent implements OnInit, AfterViewInit {
  @ViewChild('comicsDoubleHolder') comicsDoubleHolder: ElementRef;
  @ViewChild('comicsSingleHolder') comicsSingleHolder: ElementRef;
  @Input() public singlePages: IImage[] = [];
  @Input() public doublePages: IImage[] = [];
  @Input() public singleToDoubleMap: number[] = [];

  public comicsSingle: IImage[] = [];
  public comicsDouble: IImage[] = [];
  public isDoublePageLayoutView: boolean = true;
  private singleToDoubleIndexMapping = [];
  private doubleToSingleIndexMapping = [];

  constructor() { }

  ngOnInit(): void {
    this.comicsSingle = this.singlePages;
    let indexAdded = [];
    for (let i=0; i < this.comicsSingle.length; i++) {
      if (this.singleToDoubleMap[i] == undefined) {
        this.comicsDouble.push(this.comicsSingle[i]);
        this.doubleToSingleIndexMapping.push(i);
      } else if (indexAdded.indexOf(this.singleToDoubleMap[i]) < 0) {
        indexAdded.push(this.singleToDoubleMap[i]);
        this.comicsDouble.push(this.doublePages[this.singleToDoubleMap[i]]);
        this.doubleToSingleIndexMapping.push(i);
      }
      this.singleToDoubleIndexMapping.push(this.doubleToSingleIndexMapping.length-1);
    }
  }

  ngAfterViewInit() { }

  toggleView(): void {
    if (this.isDoublePageLayoutView) {
      this.comicsSingleHolder['currentImageIndex'] = this.doubleToSingleIndexMapping[this.comicsDoubleHolder['currentImageIndex']];
    } else {
      this.comicsDoubleHolder['currentImageIndex'] = this.singleToDoubleIndexMapping[this.comicsSingleHolder['currentImageIndex']];
    }
    this.isDoublePageLayoutView = !this.isDoublePageLayoutView;
  }

}
