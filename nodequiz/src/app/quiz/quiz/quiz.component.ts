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
    
    <form #f="ngForm" *ngIf="displayIt" (ngSubmit)="onSubmit(f.value)">

      <div *ngFor="let item of questions; let i = index" class="question">
        <h2>Question {{i + 1}}: {{item.question}}</h2>

        <mat-radio-group name="group{{i}}" [(ngModel)]="groups[i]" (ngModelChange)="isAnswered()"> 
            <mat-radio-button [disabled]="isDisabled()" value="a1">{{item.answers[0].a1}}</mat-radio-button><br><br>
            <mat-radio-button [disabled]="isDisabled()" value="a2">{{item.answers[1].a2}}</mat-radio-button><br><br>
            <mat-radio-button [disabled]="isDisabled()" value="a3">{{item.answers[2].a3}}</mat-radio-button><br><br>
            <mat-radio-button [disabled]="isDisabled()" value="a4">{{item.answers[3].a4}}</mat-radio-button><br><br>
        </mat-radio-group> 
      </div>      <br/><br/>

      <div class="quizbuttons">
        <button mat-raised-button type="submit" >need to go Submit</button>
      </div>      <br/><br/>

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
  groups: Array<string>;
  answerKey: Array<any> = [];
  questionsAnswered: number;
  score: any;
  displayIt: boolean;
  disabled: boolean;
  user: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.post('/api/select', {quizId: localStorage.getItem('quizId')}).subscribe(res => { this.quiz = res; this.questions = this.quiz.questions, console.log(res), (err) => {console.log(err)}})
    this.groups = []; 
    this.displayIt = false;
    this.disabled = false;
    this.score = 0;
    }

  ngOnInit() {
    
  }

  onSubmit(formData){    
    
    if(this.questionsAnswered == 10){ //need to make user record
      console.log(this.questionsAnswered +" = questions Answered");
    }
    this.getAnswers();
    
    if(this.questionsAnswered == 10){
      this.score = 0;
      
      for(let x = 0; x < this.answerKey.length; x++){
        if(this.answerKey[x] === this.groups[x]){
          this.score += 1;
        }
      }
      console.log("you got (" + this.score + ") correct out of 10");
    }else{
      //need popup or alert user that all questions are not answered
      console.log(this.questionsAnswered + " = questions answered");
    }
    let userScore = this.score * 10;
    console.log(this.quiz.title + "=is title1");
    this.user = {
      userId: localStorage.getItem('id'), 
      quizId: this.quiz.quizId, 
      quizName: this.quiz.title, 
      a1: this.groups[0], 
      a2: this.groups[1], 
      a3: this.groups[2], 
      a4: this.groups[3], 
      a5: this.groups[4], 
      a6: this.groups[5], 
      a7: this.groups[6], 
      a8: this.groups[7], 
      a9: this.groups[8], 
      a10: this.groups[9],
      score: userScore 
    };
    console.log(this.quiz.title + "=is title2");
    //this.router.navigate(['/summary'/*, res*/]);
    this.http.post('/api/updateSummary', {user: this.user}).subscribe(res => { this.router.navigate(['/summary'/*, res*/]), console.log(res), (err) => {console.log(err)}})
    //this.http.post('/api/summary', {employeeId: formData.employeeId}).subscribe(res => { this.router.navigate(['/select', res]), (err) => {console.log(err)}})
      
  }

  getAnswers(){
    for(let i = 0; i < this.questions.length; i++){
      this.answerKey.push(this.questions[i]['correct']);
      //console.log(this.questions[i]['correct']);
    }
  }

  toggleQuiz(){
    if(this.displayIt){
      this.displayIt = false;
    }else{
      this.displayIt = true;
    }
  }
  
  isDisabled(){
    if(this.disabled){
      return 'true';
    }else{
      return 'false';
    }    
  }
  isAnswered(){
    this.questionsAnswered = 0;
    for(let i = 0; i < this.groups.length; i++){
      this.questionsAnswered += 1;
    }
  }
}
