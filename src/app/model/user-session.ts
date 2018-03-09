export class UserSession {
  firstName: string;
  lastName: string;
  ranking: number;
  image: any;
  enrollmentId: number;
  raceLabel: string;
  contestLabel: string;
  contestId: number;

  constructor(firstName: string,
    lastName: string,
    ranking: number,
    image: any,
    enrollmentId: number,
    raceLabel: string,
    contestLabel: string,
    contestId: number) {
    this.firstName = firstName;
    this.ranking = ranking;
    this.image = image;
    this.enrollmentId = enrollmentId;
    this.raceLabel = raceLabel;
    this.contestLabel = contestLabel;
    this.contestId = contestId;
  }
}
