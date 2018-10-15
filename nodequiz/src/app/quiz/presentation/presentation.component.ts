import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-presentation',
  template: `
  <mat-card> 

  <mat-card-content> 

      <div *ngIf="quiz != undefined">
        <video controls autoplay reload="none" style="width:1000px;"> 

        <source src="{{quiz.filename}}" type="video/mp4" /> 

        </video>
      </div> 

  </mat-card-content>

  <mat-card-footer>
    <button routerLink="/quiz" mat-raised-button type='submit' >Take the Quiz</button>
  </mat-card-footer>

</mat-card>
  `,
  styles: [`
    mat-card{
      margin-left: 18%;
    }
    button{
      margin: auto;
    }
    mat-card-footer{
      padding-bottom: 5%;
    }
  `]
})
export class PresentationComponent implements OnInit {
  quiz: any;
  constructor(private http: HttpClient, private router: Router) {
    }

  ngOnInit() {
    this.http.post('/api/select', {quizId: localStorage.getItem('quizId')}).subscribe(res => { this.quiz = res, console.log(res), (err) => {console.log(err)}})    
   
  }
  printquiz() {
    console.log(this.quiz);
  }
}
