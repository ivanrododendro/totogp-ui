import { UserSessionService } from './service/user-session.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TotoGP';

  headerMessage: string;
  footerMessage: string;
  loggedIn: boolean;

  constructor(private userSessionService: UserSessionService) { }

  ngOnInit(): void {
    this.loggedIn = this.userSessionService.isLoggedIn();
    this.headerMessage = this.userSessionService.getFirstname() + ', you are ' + this.userSessionService.getRanking() + '\\n next race is ' + this.userSessionService.getRaceLabel();
    this.footerMessage = this.userSessionService.getContestLabel();
  }
}
