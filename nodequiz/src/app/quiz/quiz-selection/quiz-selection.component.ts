import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-selection',
  template: `
<mat-card>
  <mat-card-header>
    <h1>Quiz 1 is a blah blah blah, and based on blah blah blah. Quiz 2 is a blah blah blah, and based on blah blah blah.  Quiz 3 is a blah blah blah, and based on blah blah blah.  Quiz 1, 2, and 3 is a blah blah blah, and based on blah blah blah.  Choose wisely!</h1>
  </mat-card-header>
  <mat-card-content>
    <button mat-raised-button color="primary">Quiz 3</button>
    <button mat-raised-button color="accent">Quiz 3</button>
    <button mat-raised-button color="warn">Quiz 3</button>
  </mat-card-content>
</mat-card>
  `,
  styles: [`
    mat-card{
      width: 60%;
      margin: auto;
      font-size: 48;
    }
    
    mat-card-header{
      padding: 0 8% 5% 8%;
    }
    button{
        display: block;
        width: 80px;
        height: 80px;
        margin: 5% auto;
    }`
  ]
})
export class QuizSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
