import { Quotes } from "./../../models/quotes";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  showForm: boolean = false;

  newQuote: Quotes = new Quotes(0, "", "", new Date(), "");

  constructor() {}

  // showQuoteForm() {

  // }

  submitQuote(quoteForm) {
    console.log(quoteForm.valid);
  }

  ngOnInit() {}
}
