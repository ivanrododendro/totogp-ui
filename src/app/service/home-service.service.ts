import { Player } from '../model/player';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService implements OnInit {
  private players: Player[] = [new Player('Ale', 10), new Player('Ivan', 20)];
  canBet: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.playerHasToBet();
  }
  getPlayerRanking() {
    return this.players.slice();
  }

  playerHasToBet() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(
      'http://localhost:8081/totogp/rest/user/1/canBet',
      httpOptions
    );
  }
}
