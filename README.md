# QuotesFactory

#### 5-7-2019

#### By Sunday Brian

## Description

An Application where you can submit a quote and other users can rate it.

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

* Clone the repo
* Download the dependencies in the package.json using `npm install`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Behaviour Driven Development 

1.Feature :Submit A Quote

   As a user,you must be able to add a quote for other to rate it

  **Scenario:Add A New Quote**

     Given There is a a button to add a new quote
     When i click the button
     Then the input form is revealed
     Then i can input the data
     When i click the Submit button
     Then i should see an output with my name and time

  **Scenario:Click Name/Button** 

     Given a qoute is submitted
     When i click the output with my name and time or the button within it
     Then the qoute i submitted shoud be displayed
     Then i can like or dislike the qoute
     And i can see the like or dislike

  **Scenario:Delete Quote**

     Given there is a delete button
     When i click the button
     Then i have to get a prompt message
     When i accepted it
     Then then qoute is deleted
     And i should see the other qoutes

  **Scenario:Submitting an empty form**   

     Given there is an form
     When i interact with the inputs field 
     And leave them empty
     Then i should receive errors messages
     And the submit button will remain disabled     
            
## Known Issues

* There is no logic to highlight which quote has the most likes
* A user can like a quote post multiple times
* The submitted quote is erased on browser refresh

## Technologies Used

* Angular8
* HTML
* CSS
* Typescript
* Bootstrap4
* Font-Awesome
    
## License 

MIT (c) 2019