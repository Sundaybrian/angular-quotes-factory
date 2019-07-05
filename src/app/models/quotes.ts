export class Quotes {
  showDescription: boolean;
  upvote: number;
  downvote: number;
  constructor(
    public id: number,
    public author: string,
    public _quote: string,
    public date: Date,
    public user: string
  ) {
    this.showDescription = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
