import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
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
            <button routerLink="/select" mat-raised-button class="btn-login" type='submit' (click)="onSubmit()">Sign In</button>
          </mat-card-actions>
        </mat-card>
      </div>
  </form>
  `,
  styles: [`
  .frm-login { 
    width: 70%; 
    margin: 200px auto 0 auto;
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
      this.submitted = true;
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
