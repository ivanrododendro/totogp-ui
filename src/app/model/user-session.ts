export class UserSession {
  firstName: string;
  lastName: string;
  ranking: number;
  image: any;
  enrollmentId: number;
  raceLabel: string;
  contestLabel: string;

  constructor(firstName: string,
    lastName: string,
    ranking: number,
    image: any,
    enrollmentId: number,
    raceLabel: string,
    contestLabel: string) {
    this.firstName = firstName;
    this.ranking = ranking;
    this.image = image;
    this.enrollmentId = enrollmentId;
    this.raceLabel = raceLabel;
    this.contestLabel = contestLabel;
  }
}
