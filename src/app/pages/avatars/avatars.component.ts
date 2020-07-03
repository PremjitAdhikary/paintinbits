import { Component, OnInit } from '@angular/core';
import { AvatarsService } from '../services/avatars.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  public firstAvatar: IImage;
  public chicagoAvatar: IImage;
  public cedarPointAvatar: IImage;
  public raftingAvatar: IImage;
  public travellingAvatars: IImage[];
  public laAvatar: IImage;
  public lastAvatar: IImage;

  constructor(private _avatarsService: AvatarsService) { }

  ngOnInit(): void {
    this.firstAvatar = this._avatarsService.getFirstAvatar();
    this.chicagoAvatar = this._avatarsService.getChicagoAvatar();
    this.cedarPointAvatar = this._avatarsService.getCedarPointAvatar();
    this.raftingAvatar = this._avatarsService.getRaftingAvatar();
    this.travellingAvatars = this._avatarsService.getTravellingAvatars();
    this.laAvatar = this._avatarsService.getLaAvatar();
    this.lastAvatar = this._avatarsService.getLastAvatar();
  }

}
