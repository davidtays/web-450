import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quiz',
  template:  `
  <mat-card>

    <mat-card-header>
      <h2>Quiz.{{quiz.quizId}}</h2>
    </mat-card-header>

    <mat-card-content>
    
    <button *ngIf="!displayIt" mat-raised-button type="submit" (click)="toggleQuiz()" ><h2>READY!</h2></button>
    
    <form #f="ngForm" *ngIf="displayIt" (ngSubmit)="getAnswers()">
      <div *ngFor="let item of questions; let i = index" class="question">
        <p>Question {{i + 1}}: {{item.question}}</p>
        <mat-radio-group name="group{{i}}" [(ngModel)]="answers[i]" (ngModelChange)="answered()"> 

          <div *ngFor="let answer of item.answers; let num = index" class="answer"> 
            <mat-radio-button [value]="answer['a' + num]" class="answer-radio" >{{answer['a' + num]}}</mat-radio-button>
            <br/><br/>  
          </div>

        </mat-radio-group>     
      </div>
      <br/><br/>
      <div class="quizbuttons">
        <button mat-raised-button type="submit" >need to go Submit</button>
      </div>
      <br/><br/>
    </form>

    </mat-card-content>

  </mat-card>  
  `,
  styles: [`
    button {      
      width: 222px;
      height: 111px
      margin: auto;
    }
    .quizbuttons{
      display: in-line;
      width:50%;
      margin-left: 37%;
    }
    .needForEach{
      width: 70%;
      margin-left: 15%;
    }
    mat-button-toggle{
      width: 100px;
      height: 30px;
    }
    mat-button-toggle-group{
      width: 30%;
      height: 30px;
      margin-left: 33%;
      justify-content: center;
    }
    mat-card{
      width: 60%;
      margin: auto; 
      justify-content: center;     
    }
    mat-card-header{
      font-size: 28px;
      justify-content: center;
    }
  `]
})
export class QuizComponent implements OnInit {
  
  quiz: any;
  questions: Array<object>;
  answers: Array<object>;
  theAnswers: Array<any>;
  score: any;
  displayIt: boolean;
  

  constructor(private http: HttpClient, private router: Router) {
    this.http.post('/api/select', {quizId: localStorage.getItem('quizId')}).subscribe(res => { this.quiz = res; this.questions = this.quiz.questions, console.log(res), (err) => {console.log(err)}})
    }

  ngOnInit() {
    this.answers = [];   
    this.displayIt = false;
  }

  onSubmit(formData){
    console.log(formData);
  }

  toggleQuiz(){
    if(this.displayIt){
      this.displayIt = false;
    }else{
      this.displayIt = true;
      this.getAnswers();
    }
  }
  getAnswers(){
    this.questions.forEach((x) => {
      x['answers'].forEach((i) => {
        console.log(i);
      })
    })
  }
}
