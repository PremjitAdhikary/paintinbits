import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../../domain/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() public allImages: IImage[] = [];
  @Input() public showText = false;
  @Input() public showDescription = false;
  @Input() public showBelt = true;
  @Input() public currentImageIndex: number = 0;
  public currentImage: IImage;

  constructor() { }

  ngOnInit(): void {
    if (this.currentImageIndex < 0 || this.currentImageIndex >= this.allImages.length) {
      this.currentImageIndex = 0;
    }
    this.currentImage = this.allImages[this.currentImageIndex];
  }

  prev(): void {
    this.select(this.currentImageIndex-1);
  }

  next(): void {
    this.select(this.currentImageIndex+1);
  }

  select(index: number): void {
    if ((index >= 0) && (index <= this.allImages.length-1)) {
      this.currentImageIndex = index;
      this.currentImage = this.allImages[this.currentImageIndex];
    }
  }

}
