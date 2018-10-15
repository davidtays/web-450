import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quiz-selection',
  template: `
  <form #f="ngForm" >    
    <mat-card>
      <mat-card-header>
        <h1>Quiz 1 is a blah blah blah, and based on blah blah blah. Quiz 2 is a blah blah blah, and based on blah blah blah.  Quiz 3 is a blah blah blah, and based on blah blah blah.  Quiz 1, 2, and 3 is a blah blah blah, and based on blah blah blah.  Choose wisely!</h1>
      </mat-card-header>
      <mat-card-content>
      
        <button type='button' (click)="onSubmit(1)" mat-raised-button name="1" routerLink="/present" color="primary">Quiz 1</button>
        <button type='button' (click)="onSubmit(2)" mat-raised-button name="2" routerLink="/present" color="accent">Quiz 2</button>
        <button type='button' (click)="onSubmit(3)" mat-raised-button name="3" routerLink="/present" color="warn">Quiz 3</button>
      
      </mat-card-content>
    </mat-card>
  </form>
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
  
  constructor(private http: HttpClient, private router: Router) { }
  
  onSubmit(id){
    console.log(id);
    localStorage.setItem("quizId", id);
    this.http.post('/api/select', {quizId: id}).subscribe(res => { this.router.navigate(['/present']), (err) => {console.log(err)}})
    
    /*if (id == "1"){
      console.log(id + ' is the quiz selected');
      //this.router.navigate(['/select']);//, this.employeeId ****************How do I call the controller from here?*****************************
      //this.http.post('/api/select', {quizId: id}).subscribe(res => { this.router.navigate(['/quiz'], res), (err) => {console.log(err)}})
    }
    if (id == "2"){
      console.log(id + ' is the quiz selected');
      //this.router.navigate(['/select']);//, this.employeeId ****************How do I call the controller from here?*****************************
      //this.http.post('/api/select', {quizId: id}).subscribe(res => { this.router.navigate(['/quiz'], res), (err) => {console.log(err)}})
    }
    if (id == "3"){
      console.log(id + ' is the quiz selected');
      //this.router.navigate(['/select']);//, this.employeeId ****************How do I call the controller from here?*****************************
      //this.http.post('/api/select', {quizId: id}).subscribe(res => { this.router.navigate(['/quiz'], res), (err) => {console.log(err)}})
    }*/
  }

  ngOnInit() {
    console.log(localStorage.getItem('id') + "=is cookie from quiz-selection component");
  }

}
