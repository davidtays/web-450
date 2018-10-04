import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
  <mat-card> 

  <mat-card-content> 

      <video controls autoplay reload="none" style="width:1000px;"> 

          <source src="../../../assets/SOA and ESB.mp4" type="video/mp4" /> 

      </video> 

  </mat-card-content>

  <mat-card-footer>
    <button routerLink="/quiz" mat-raised-button type='submit' >Take the Quiz</button>
  </mat-card-footer>

</mat-card>
  `,
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
