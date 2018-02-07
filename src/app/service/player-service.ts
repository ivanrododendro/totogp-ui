import { Player } from '../model/player';
import { OnInit } from '@angular/core';

export class PlayerService {
  players: Player[] = [new Player('Ale', 10), new Player('Ivan', 20)];

  // FIXME : on init ne marche pas ici
  // ngOnInit() {
  //   this.pl ayers.push(new Player('Ale', 10));
  //   this.players.push(new Player('Ivan', 20));

  //   console.log(this.players.length);
  // }
}
