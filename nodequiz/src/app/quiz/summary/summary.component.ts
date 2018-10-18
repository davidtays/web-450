import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-summary',
  template:  `
  <mat-form-field>
    <mat-select placeholder="Favorite user">
      <mat-option *ngFor="let item of user" value="item.quizId">
        {{item.quizName}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  `,
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  user : any;
  quizzes: Array<object>;
  constructor(private http: HttpClient, private router: Router) {
    this.http.post('/api/getSummary', {userId: localStorage.getItem('id')}).subscribe(res => { this.user = res;  console.log(res), (err) => {console.log(err)}})
    
   }

  ngOnInit() {
  }

}
