import { Quotes } from "./../../models/quotes";
import { Component, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";


@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  showForm: boolean = false;
  newQuote: Quotes = new Quotes(0, "", "", new Date(), "");
  @Output() addQuote = new EventEmitter<Quotes>();
  // @ViewChild('quoteForm') form;


  constructor() { }

  submitQuote(quoteForm) {
    console.log(quoteForm);
    console.log(this.newQuote);
    this.addQuote.emit(this.newQuote);
    // quoteForm.reset();
  }

  ngOnInit() { }
}
