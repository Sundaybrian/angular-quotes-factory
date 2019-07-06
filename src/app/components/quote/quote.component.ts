import { Quotes } from "../../models/quotes";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      0,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(1990, 6, 4, 12, 38, 15),
      "Sunday Brian"
    ),
    new Quotes(
      1,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(1997, 6, 4, 17, 58, 15),
      "Sunday Brian"
    ),
    new Quotes(
      2,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(2007, 6, 4, 11, 18, 15),
      "Sunday Omwami"
    ),
    new Quotes(
      3,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(2017, 6, 4, 9, 0, 15),
      "Kobra"
    )
  ];

  constructor() { }

  showQuote(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  onLikeClicked(clicked, index) {
    if (clicked) {
      this.quotes[index].upvote += 1;
    }
  }

  onDislikeClicked(clicked, index) {
    if (clicked) {
      this.quotes[index].downvote += 1;
    }
  }

  onDelete(clicked, index) {
    if (confirm("Are you sure hombre?")) {
      this.quotes.splice(index, 1);
    }
  }

  onAddQuote(quote) {
    let qoutesArrayLength = this.quotes.length;
    quote.id = qoutesArrayLength + 1;
    quote.date = new Date(quote.date);

    this.quotes.unshift(quote);

  }

  ngOnInit() { }
}
