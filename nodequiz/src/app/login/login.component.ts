import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <mat-card class="greeting"> 

    <mat-card-content> 

      <h1>Welcome to the quiz portal.  Make yourself comfortable and take part in a quiz of your choosing.  Once logged in, you will be presented with a selection of quizzes.  Each quiz comes with a presentation that will 'brush you up' on the subject, before the quiz takes place.</h1>

    </mat-card-content>

  </mat-card>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">    
      <div class="frm-login">
        <mat-card class="login-panel form-login-panel">
          <mat-card-header class="frm-login-header">
            <mat-toolbar class="frm-login-toolbar">
              Sign in to Nodequiz
            </mat-toolbar>
          </mat-card-header>

          <mat-card-content class="frm-login-body">
            <mat-form-field>
              <input type="text" name="userId" matInput placeholder="Enter Your Employee ID" [(ngModel)]="employeeId" pattern="^[a-z]{2}[0-9]{4}$">
            </mat-form-field>      
          </mat-card-content>
          

          <mat-card-actions class="frm-login-actions">
            <button mat-raised-button class="btn-login">Cancel</button>
            <button mat-raised-button class="btn-login" type='submit' (click)="onSubmit()"  routerLink="/select">Sign In</button>
          </mat-card-actions>
        </mat-card>
      </div>
  </form>
  `,
  styles: [`
  .greeting{
    width: 50%;
    margin: 20px auto;
  }
  .frm-login { 
    width: 30%; 
    margin: 20px auto 0 auto;
    text-align: center;
  }    
  `]
})
export class LoginComponent implements OnInit {
  text = 'login page'
  submitted = false;
  employeeId: string;
  constructor() { }
  
  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    if (this.checkId(this.employeeId)){
      //this.submitted = true;
      console.log(this.employeeId + ' is logged in');
    }
  }

  checkId(id: string){
    let loginRegex = RegExp('^[a-z]{2}[0-9]{4}$');
    if (id.length == 6 && loginRegex.test(id)) {//password is legit if 6 digits
      return true;
    }
    else{
      return false;
    }
  }
}
