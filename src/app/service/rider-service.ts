import { Rider } from '../model/rider';

export class RiderService {
  private riders: Rider[] = [
    new Rider(
      1,
      'Andrea Dovizioso',
      'http://www.motogp.com/en/api/rider/photo/grid/old/5885'
    ),
    new Rider(
      2,
      'Maverick Vinales',
      'http://www.motogp.com/en/api/rider/photo/grid/old/7409'
    )
  ];

  getRiders() {
    return this.riders.slice();
  }
}
