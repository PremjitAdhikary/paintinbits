import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { AllWallpapersService } from '../services/all-wallpapers.service';

@Component({
  selector: 'app-all-wallpapers',
  templateUrl: './all-wallpapers.component.html',
  styleUrls: ['./all-wallpapers.component.css']
})
export class AllWallpapersComponent implements OnInit, AfterViewInit {
  @ViewChild('desktopWallpapersHolder') desktopWallpapersHolder: ElementRef;
  @ViewChild('mobileWallpapersHolder') mobileWallpapersHolder: ElementRef;

  public desktopWallpapers: IImage[];
  private uhdLinks: HTMLAnchorElement[];
  public mobileWallpapers: IImage[];
  private mqhdLinks: HTMLAnchorElement[];

  constructor(private _allWallpapersService: AllWallpapersService) { }

  ngOnInit(): void {
    this.uhdLinks = [];
    this.desktopWallpapers = this._allWallpapersService.getDesktopWallpapers();
    for (const linkInfo of this._allWallpapersService.getDesktopWallpapersDownloadLinks()) {
      const link = document.createElement('a');
      link.setAttribute('href', linkInfo.downloadPath);
      link.setAttribute('download', linkInfo.downloadFileName);
      link.setAttribute('visibility','hidden');
      link.setAttribute('target', '_blank');
      link.text = linkInfo.downloadDisplay;
      this.uhdLinks.push(link);
    }
    this.mobileWallpapers = this._allWallpapersService.getMobileWallpapers();
    this.mqhdLinks = [];
    for (const linkInfo of this._allWallpapersService.getMobileWallpapersDownloadLinks()) {
      const link = document.createElement('a');
      link.setAttribute('href', linkInfo.downloadPath);
      link.setAttribute('download', linkInfo.downloadFileName);
      link.setAttribute('visibility','hidden');
      link.setAttribute('target', '_blank');
      link.text = linkInfo.downloadDisplay;
      this.mqhdLinks.push(link);
    }
  }

  ngAfterViewInit(): void { }

  downloadDesktopWallpaper(): void {
    let ll = this.uhdLinks[this.desktopWallpapersHolder['currentImageIndex']];
    document.body.appendChild(ll);
    ll.click();
    document.body.removeChild(ll);
  }

  downloadMobileWallpaper(): void {
    let ll = this.mqhdLinks[this.mobileWallpapersHolder['currentImageIndex']];
    document.body.appendChild(ll);
    ll.click();
    document.body.removeChild(ll);
  }

}
