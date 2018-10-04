import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-selection',
  template: `
  <mat-card> 

    <mat-card-content> 

    <button mat-raised-button type='submit'>Quiz 1</button>

    <button mat-raised-button type='submit'>Quiz 2</button>

    <button mat-raised-button class="btn-login" type='submit'>Quiz 3</button>

    </mat-card-content>

  </mat-card>
  `,
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
