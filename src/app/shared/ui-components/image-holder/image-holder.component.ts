import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../../domain/image';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() public imageDetails: IImage;
  @Input() public showText: boolean = false;
  @Input() public showDescription: boolean = false;

  constructor() { }

  ngOnInit(): void {  }

}
