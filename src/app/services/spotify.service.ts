import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Service spotify')
   }

   getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
       Authorization: 'Bearer BQAiGXgzQpOIMCCQeL0nxyE375hVo1yhD1zFOfnqP-WSngAUxNYGDWDRv8Fu_U5hBtqseK_PaM9fTPnPZqs'
    })

    return this.http.get(url, { headers } )

   }

  getNewReleases() {

    return this.getQuery( 'browse/new-releases?limit=20' )
               .pipe( map( (data: any) => data.albums.items ))

  }

  getArtists(term: string) {

    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
               .pipe( map( (data: any) => data.artists.items ))

  }

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`)

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
               // tslint:disable-next-line: no-string-literal
               .pipe( map( data => data['tracks'] ))
  }

}
