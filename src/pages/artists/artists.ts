import {Component, OnInit} from "@angular/core";
import {ArtistService} from "../../services/artist.service";
import {NavController} from "ionic-angular";
import {ArtistPage} from "../artist/artist";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'artists-component',
  templateUrl: './artists.html'
})

export class ArtistsPage implements OnInit {
  private artistList: Array<Object> = new Array<Object>();
  private isArtistsGet: boolean = false;
  
  constructor(private _artistService: ArtistService,
              private _navController: NavController,
              private _dataService: DataService) {
    this.isArtistsGet = false;
  }
  
  ngOnInit() {
    this.artistList = this._artistService.getArtistList();
    this.isArtistsGet = true;
  }
  
  onDetailsClick(index: number) {
    let artistName = JSON.parse(JSON.stringify(this.artistList[index])).name;
    this._dataService.getArtistInfo(artistName)
    .subscribe(
      data => {
        this._artistService.setCurrentArtist(data);
        this._navController.push(ArtistPage);
      },
      error => {
        alert(error);
      }
    );
  }
}