import {Component, OnInit} from "@angular/core";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'artist-component',
  templateUrl: './artist.html'
})

export class ArtistPage implements OnInit {
  private currentArtist: any;
  private artistInfo: Array<string> = [];
  private isInfoGet: boolean = false;
  
  constructor(private _artistService: ArtistService) {
    this.isInfoGet = false;
  }
  
  ngOnInit() {
    this.currentArtist = this._artistService.getCurrentArtist();
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).image[2]['#text']);
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).name);
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).url);
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).stats.listeners);
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).stats.playcount);
    this.artistInfo.push(JSON.parse(JSON.stringify(this.currentArtist)).bio.summary);
    this.isInfoGet = true;
  }
}
