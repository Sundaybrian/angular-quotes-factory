import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';
import { QuotesDetailsComponent } from './components/quotes-details/quotes-details.component';
import { NavComponent } from './components/nav/nav.component';
import { MostlikedDirective } from './directives/mostliked.directive';
import { ElapsedQuotesDaysPipe } from './pipes/elapsed-quotes-days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesFormComponent,
    QuotesDetailsComponent,
    NavComponent,
    MostlikedDirective,
    ElapsedQuotesDaysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
