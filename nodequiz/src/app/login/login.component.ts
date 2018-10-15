import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';//import { Router } from '../../../server/controllers/homeController';
import { CookieService } from 'angular2-cookie/core'
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
              <input type="text" name="employeeId" matInput placeholder="Enter Your Employee ID" [(ngModel)]="employeeId" pattern="^[a-z]{2}[0-9]{4}$">
            </mat-form-field>      
          </mat-card-content>
          

          <mat-card-actions class="frm-login-actions">
            <button mat-raised-button class="btn-login" type='submit' >Sign In</button>
          </mat-card-actions>
        </mat-card>
      </div>
  </form>
  `,
  styles: [`
  
  .frm-login { 
    width: 30%; 
    margin: 20px auto 100px auto;
    text-align: center;
  }    
  `]
})
export class LoginComponent implements OnInit {
  text = 'login page'
  submitted = false;
  employeeId: any;
  constructor(private router: Router, private http: HttpClient, private _cookieService:CookieService) { }
  
  ngOnInit() {
  }
  
  //employee: any;
  onSubmit(formData){
    console.log(formData);
    console.log(formData.employeeId);
    if (this.checkId(formData.employeeId)){
      this.submitted = true;
      console.log(formData.employeeId + ' is logged in');

      localStorage.setItem('id', formData.employeeId);
      console.log(localStorage.getItem('id') + "=is cookie");
      //this._cookieService.put('test', formData.employeeId);
      //console.log(this.getCookie('test') + "=is cookie");
      this.http.post('/api/login', {employeeId: formData.employeeId}).subscribe(res => { this.router.navigate(['/select'/*, res*/]), (err) => {console.log(err)}})
      //this.http.get('api/employees/nq1234').subscribe(data => { this.employee = data;})
    }
  }

  checkId(id: string){
    let loginRegex = RegExp('^[a-z]{2}[0-9]{4}$');
    if (id.length == 6 && loginRegex.test(id)) {//password is legit if 6 digits// 
      return true;
    }
    else{
      return false;
    }
  }
}
