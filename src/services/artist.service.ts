import {Injectable} from "@angular/core";

@Injectable()
export class ArtistService {
  private artistList: Array<Object> = new Array<Object>();
  private currentArtist: Object = {};

  setArtistList(artist: Array<Object>) {
    this.artistList = artist;
  }

  getArtistList() {
    return this.artistList;
  }
  
  setCurrentArtist(artist: Object) {
    this.currentArtist = artist;
  }
  
  getCurrentArtist() {
    return this.currentArtist;
  }
}