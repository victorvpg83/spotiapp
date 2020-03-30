import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  newReleases: any[] = []
  loading: boolean

  error: boolean
  errorMessage: string

  constructor( private spotify: SpotifyService ) {

    this.loading = true
    this.error = false

    this.spotify.getNewReleases()
      .subscribe((data: any ) => {
        console.log( data )
        this.newReleases = data
        this.loading = false
      }, (serviceError) => {
        this.loading = false
        this.error = true
        console.log(serviceError)
        this.errorMessage = serviceError.error.error.message
      })
   }


}
