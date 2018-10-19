import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-summary',
  template:  `
  <mat-form-field>
    <mat-select placeholder="Quizzes for selection">
      <mat-option *ngFor="let item of users" value="item.userId">
        {{item.userId}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  <table mat-table dataSource="users" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let users"> {{users.userId}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let users"> {{users.userId}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let users"> {{users.userId}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let users"> {{users.userId}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

  `,
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  users : any;
  quizzes: Array<object>;
  idArray: Array<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.http.post('/api/getSummary', {userId: localStorage.getItem('id')}).subscribe(res => { this.users = res; this.quizzes = this.users; console.log(res), (err) => {console.log(err)}})
      
  }

  ngOnInit() {
    this.populateIdArray();
  }
  populateIdArray(){
    this.quizzes.forEach(element => {
      this.matchId(element);      
    });
  }

  matchId(element){
    var add = true;
    if(this.idArray.length == 0){
      this.idArray.push(element.userId)
    }else{
      this.idArray.forEach(id => {
        if(id == element.userId){
          return
        }else{
          add = false
        }
      });
    }
    if(add && this.idArray.length != 0){
      this.idArray.push(element.userId)
    }
    this.idArray.forEach(element => {
      console.log(element);
    });
  }
}
