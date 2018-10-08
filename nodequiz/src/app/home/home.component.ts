import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <mat-card> 

    <mat-card-content class="greeting"> 

      <p>Welcome to the quiz portal.  Make yourself comfortable and take part in a quiz of your choosing.  Once logged in, you will be presented with a selection of quizzes.  Each quiz comes with a presentation that will 'brush you up' on the subject, before the quiz takes place.</p>
      <p>Welcome to the quiz portal.  Make yourself comfortable and take part in a quiz of your choosing.  Once logged in, you will be presented with a selection of quizzes.  Each quiz comes with a presentation that will 'brush you up' on the subject, before the quiz takes place.</p>

    </mat-card-content>

  </mat-card>
  `,
  styles: [`
  .greeting{
    font-size: 24px;
    text-indent: 5%;
    width: 50%;
    margin: 20px auto;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
