import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {contentHeaders} from "./headers";

@Injectable()
export class DataService {
  constructor(private http: Http) {

  }

 getUserInfo(name: string) {
    let request = 'http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user='+ name +'&api_key=48e884acad6aa41d624a30b1396dbcef&format=json';

    return this.http.get(request, { headers: contentHeaders })
      .map((res: Response) => res.json().user)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }    
    
  getTopArtists(name: string): Observable<Object> {
    let request = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user='+ name +'&api_key=48e884acad6aa41d624a30b1396dbcef&format=json';

    return this.http.get(request, { headers: contentHeaders })
      .map((res: Response) => res.json().topartists.artist)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getArtistInfo(artist: string) {
    let request = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='  + artist + '&api_key=48e884acad6aa41d624a30b1396dbcef&format=json';
  
    return this.http.get(request, { headers: contentHeaders })
      .map((res: Response) => res.json().artist)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}