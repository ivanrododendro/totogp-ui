export class UserSession {
  firstName: string;
  lastName: string;
  ranking: number;
  image: any;
  enrollmentId: number;
  raceLabel: string;
  championShipLabel: string;

  constructor(firstName: string,
    lastName: string,
    ranking: number,
    image: any,
    enrollmentId: number,
    raceLabel: string,
    championShipLabel: string) {
    this.firstName = firstName;
    this.ranking = ranking;
    this.image = image;
    this.enrollmentId = enrollmentId;
    this.raceLabel = raceLabel;
    this.championShipLabel = championShipLabel;
  }
}
