import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {ArtistService} from "../../services/artist.service";
import {NavController} from "ionic-angular";
import {DataService} from "../../services/data.service";
import {ArtistsPage} from "../artists/artists";

@Component({
  selector: 'user-component',
  templateUrl: './user.html'
})

export class UserPage implements OnInit {
  private userInfo: Array<Object> = new Array<Object>();
  private isInfoGet: boolean = false;

  private artistList: Array<Object> = new Array<Object>();
  private isArtistsGet: boolean = false;
  
  constructor(private userService: UserService,
              private artistService: ArtistService,
              private nav: NavController,
              private dataService: DataService) {
    this.isInfoGet = false;
    this.isArtistsGet = false;
  }
  
  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.isInfoGet = true;
    this.artistList = this.artistService.getArtistList();
    this.isArtistsGet = true;
  }

  

showTopArtists(string: "NickMusicAddict") {
    this.dataService.getTopArtists("NickMusicAddict")
      .subscribe(
        data => {
          if(data != null) {
            this.artistService.setArtistList(JSON.parse(JSON.stringify(data)));
             this.nav.push(ArtistsPage);  
          }
        },
        error => {
          alert(error);
        }
      );
 }
}
