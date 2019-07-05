import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../../models/quotes";

@Component({
  selector: "app-quotes-details",
  templateUrl: "./quotes-details.component.html",
  styleUrls: ["./quotes-details.component.css"]
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() likeIsClicked = new EventEmitter<boolean>();
  @Output() dislikeIsClicked = new EventEmitter<boolean>();
  @Output() deleteIsClicked = new EventEmitter<boolean>();

  constructor() {}

  likeClicked(clicked: boolean) {
    this.likeIsClicked.emit(clicked);
  }

  dislikeClicked(clicked: boolean) {
    this.dislikeIsClicked.emit(clicked);
  }

  deleteQuote(clicked: boolean) {
    this.deleteIsClicked.emit(clicked);
  }

  ngOnInit() {}
}
