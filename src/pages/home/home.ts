import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService} from "../../services/data.service";
import { ArtistService} from "../../services/artist.service";
import { UserService} from "../../services/user.service";
import { UserPage} from "../user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(private nav: NavController,
              private dataService: DataService,
              private userService: UserService,
              private artistService: ArtistService)    {
  }

  
  onSearchClick(name: string) {
    this.dataService.getUserInfo(name)
      .subscribe(
        data => {
          if(data != null) {
            this.userService.setUserInfo(JSON.parse(JSON.stringify(data)));
            this.nav.push(UserPage);
          }
        },
        error => {
          alert(error);
        }
      );
      
  }
}
