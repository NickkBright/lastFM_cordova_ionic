import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataService } from "../services/data.service";
import { ArtistService} from "../services/artist.service";
import { UserService} from "../services/user.service";
import { UserPage } from "../pages/user/user";
import { ArtistsPage} from "../pages/artists/artists";
import { ArtistPage} from "../pages/artist/artist";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    ArtistsPage,
    ArtistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    ArtistsPage,
    ArtistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    ArtistService,
    UserService
  ]
})
export class AppModule {}
