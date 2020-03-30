import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artists: any[] = []
  loading: boolean

  constructor( private spotify: SpotifyService ) { }

  search(term: string) {
    this.loading = true
    this.spotify.getArtists( term )
      .subscribe( (data: any) => {
        this.artists = data
        this.loading = false
      })
  }
}
