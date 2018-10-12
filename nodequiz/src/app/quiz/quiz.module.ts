import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SummaryComponent } from './summary/summary.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizRoutingModule} from './quiz-routing';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    MatToolbarModule,
    QuizRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    HttpModule
  ],
  declarations: [QuizComponent, PresentationComponent, SummaryComponent, QuizSelectionComponent]
})
export class QuizModule { }
