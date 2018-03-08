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

  username: string;

  constructor(private userSessionService: UserSessionService) { }

  ngOnInit(): void {
    this.username = this.userSessionService.getFirstname();
  }
}
