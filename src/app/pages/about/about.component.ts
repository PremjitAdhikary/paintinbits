import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { MetaTagService } from 'src/app/shared/services/meta-tag.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private _imgLocationService: ImageLocationService,
    private _metaTagService: MetaTagService
    ) { }

  ngOnInit(): void {
    this._metaTagService.updateMeta(
      this.title,
      this.meta,
      'Paint In Bits',
      'An online collection of all my drawings.',
      this.getImagePath('page_banner')
    );
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

}
