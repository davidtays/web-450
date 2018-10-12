import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quiz-selection',
  template: `
<mat-card>
  <mat-card-header>
    <h1>Quiz 1 is a blah blah blah, and based on blah blah blah. Quiz 2 is a blah blah blah, and based on blah blah blah.  Quiz 3 is a blah blah blah, and based on blah blah blah.  Quiz 1, 2, and 3 is a blah blah blah, and based on blah blah blah.  Choose wisely!</h1>
  </mat-card-header>
  <mat-card-content>
   <form #f="ngForm" (ngSubmit)="onSubmit()">    
    <button mat-raised-button name="1" routerLink="/present" color="primary">Quiz 1</button>
    <button mat-raised-button name="2" routerLink="/present" color="accent">Quiz 2</button>
    <button mat-raised-button name="3" routerLink="/present" color="warn">Quiz 3</button>
   </form>
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

  constructor(private http: HttpClient, public router: Router) { }
  onSubmit(formData){
    console.log(formData);
    if (formData.name == "1"){
      console.log(formData.name + ' is the quiz selected');
      //this.router.navigate(['/select']);//, this.employeeId ****************How do I call the controller from here?*****************************
      this.http.post('/api/login', formData.name).subscribe(res => { this.router.navigate(['/select']), (err) => {console.log(err)}})
    }
  }
  ngOnInit() {
  }

}
