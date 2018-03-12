import { Player } from '../model/player';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from './user-session.service';
import { TotogpHttpClient } from '../shared/totogp-http-client';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService implements OnInit {
  private ranking: Player[] = [];

  constructor(
    private http: HttpClient,
    private userSessionService: UserSessionService,
    private myHttpClient: TotogpHttpClient
  ) {}

  ngOnInit(): void {
    this.playerHasToBet();
  }

  getPlayerRanking(): Observable<Player[]> {
    const enrollmentId = this.userSessionService.getEnrollmentId();

    return this.myHttpClient.get('home/ranking/' + enrollmentId);
  }

  playerHasToBet() {
    const enrollmentId = this.userSessionService.getEnrollmentId();

    return this.myHttpClient.get('user/' + enrollmentId + '/canBet');
  }
}
