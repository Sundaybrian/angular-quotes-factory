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
      new Date(1897, 6, 4),
      "Sunday Brian"
    ),
    new Quotes(
      0,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(1897, 6, 4),
      "Sunday Brian"
    ),
    new Quotes(
      0,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(1897, 6, 4),
      "Sunday Brian"
    ),
    new Quotes(
      0,
      "Stephen Crane",
      "A man said to the universe Sir, I exist!However,replied the universe The fact has not created in me A sense of obligation.",
      new Date(1897, 6, 4),
      "Sunday Brian"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
