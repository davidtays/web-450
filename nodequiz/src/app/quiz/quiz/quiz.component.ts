import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  template:  `
  <mat-card>
    <mat-card-header>
      <p>Quiz.#</p>
    </mat-card-header>
    <mat-card-content>
      <div class="needForEach">
      <p>Nodequiz Time!  Attempt to answer all of the questions to the best of your knowledge, based on the information from the presentation.  this is where the question should be bound</p>
      <input type="radio" name="optionGroup"><label for="optionGroup">True. This needs to be bound</label>
      <br/>  
      <input type="radio" name="optionGroup"><label for="optionGroup">True. This needs to be bound</label>
      <br/> 
      <input type="radio" name="optionGroup"><label for="optionGroup">True. This needs to be bound</label>
      <br/> 
      <input type="radio" name="optionGroup"><label for="optionGroup">True. This needs to be bound</label>
      <br/>     
      </div>
      <div class="quizbuttons">
        <button mat-raised-button type="submit" >need to go Submit</button>
      </div>
      <br/><br/>
      <mat-button-toggle-group>
        <mat-button-toggle class="navigation"><mat-icon class="md-64">chevron_left</mat-icon></mat-button-toggle>
        <mat-button-toggle>2</mat-button-toggle>
        <mat-button-toggle>3</mat-button-toggle>
        <mat-button-toggle>4</mat-button-toggle>
        <mat-button-toggle class="material-icons"><mat-icon class="md-64">chevron_right</mat-icon></mat-button-toggle>
      </mat-button-toggle-group>
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
      height: 500px;
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

  constructor() { }

  ngOnInit() {
  }

}
