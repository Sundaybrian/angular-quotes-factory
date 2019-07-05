import { Quotes } from "./../../models/quotes";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  showForm: boolean = false;
  newQuote: Quotes = new Quotes(0, "", "", new Date(), "");
  @Output() addQuote = new EventEmitter<Quotes>();


  constructor() { }

  // showQuoteForm() {

  // }

  submitQuote(qouteForm) {
    console.log(qouteForm);
    console.log(this.newQuote);
    this.addQuote.emit(this.newQuote);
  }

  ngOnInit() { }
}
