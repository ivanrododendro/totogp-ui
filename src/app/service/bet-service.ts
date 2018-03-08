import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BetService {
  constructor(private http: HttpClient) {}

  bet() {
    console.log('betservice :: bet');
  }

  placeWinnerBet(driverNumber: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    this.http
      .post(
        'http://localhost:8081/totogp/rest/bet/placeWinnerBet',
        'enrollmnetId=1&driverNumber=' + driverNumber,
        httpOptions
      )
      .subscribe(next => console.log(next), error => console.log(error));
  }
  placePoleBet(driverNumber: number) {}
  placePodiumBet(
    fisrtDriverNumber: number,
    secondDriverNumber: number,
    thidrDriverNumber: number
  ) {}

  getCurrentBetType() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(
      'http://localhost:8081/totogp/rest/bet/current/type/enrollment/1',
      httpOptions
    );
  }
}
