import { Rider } from './../model/rider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TotogpHttpClient } from '../shared/totogp-http-client';
import { UserSessionService } from './user-session.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BetService {
  private riders: Rider[] = [];

  constructor(
    private http: TotogpHttpClient,
    private httpClient: HttpClient,
    private userSessionService: UserSessionService
  ) {
    http.get('home/riders').subscribe(next => {
      for (const entry of next) {
        this.riders.push(
          new Rider(entry['id'], entry['name'], entry['pictureUrl'])
        );
      }
    });
  }

  getWinnerBet(): Observable<Rider> {
    return this.httpClient.get<Rider>(
      environment.serverUrl +
        'bet/winnerBet/' +
        this.userSessionService.getEnrollmentId()
    );
  }

  getRiders() {
    return this.riders.slice();
  }

  bet() {
    console.log('betservice :: bet');
  }

  placeWinnerBet(driverNumber: number) {
    this.http.postForm(
      'bet/placeWinnerBet',
      new Map([
        ['enrollmentId', this.userSessionService.getEnrollmentId()],
        ['driverNumber', driverNumber]
      ])
    );
  }
  placePoleBet(driverNumber: number) {}

  placePodiumBet(
    fisrtDriverNumber: number,
    secondDriverNumber: number,
    thidrDriverNumber: number
  ) {}

  getCurrentBetType() {
    return this.http.get(
      'bet/current/type/enrollment/' + this.userSessionService.getEnrollmentId()
    );
  }
}
