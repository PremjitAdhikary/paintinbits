import { Component, OnInit, Input, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-hostel-v-header',
  templateUrl: './hostel-v-header.component.html',
  styleUrls: ['./hostel-v-header.component.css']
})
export class HostelVHeaderComponent implements OnInit {

  @Input() public id = 0;
  @Input() public vLogoPath = "";
  public articleId: number;
  public articleTitle: string;
  private _url: string = "assets/img/circularLogo.png";

  constructor(@Inject(APP_BASE_HREF) private baseHref: string) { }

  ngOnInit(): void {
    this.articleId = this.id;
    this.vLogoPath = this.baseHref + this._url;
  }

}
