import { Player } from '../model/player';
import { OnInit } from '@angular/core';
import { Rider } from '../model/rider';

export class RiderService {
  // tslint:disable-next-line:max-line-length
  riders: Rider[] = [new Rider(1, 'Andrea Dovizioso', 'http://www.motogp.com/en/api/rider/photo/grid/old/5885')];

  // FIXME : on init ne marche pas ici
  // ngOnInit() {
  //   console.log(this.riders.length);
  // }
}
