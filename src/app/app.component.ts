import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maydeeImagePath:   string;
  twitterImagePath:  string;
  facebookImagePath: string;
  googleImagePath:   string;
  linkedinImagePath: string

  constructor() {
    this.maydeeImagePath   = 'assets/img/Maydée-logo-entier-e1511168387551.png';
    this.twitterImagePath  = 'assets/img/if_twitter_1279054.png';
    this.facebookImagePath = 'assets/img/if_facebook_1279052.png';
    this.googleImagePath   = 'assets/img/if_google-plus_1279046.png';
    this.linkedinImagePath = 'assets/img/if_linkedin_1279057.png';
  }
}
