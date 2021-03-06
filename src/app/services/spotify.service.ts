import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Listo')
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-release',{headers});
    
   };
}
