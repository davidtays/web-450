import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SummaryComponent } from './summary/summary.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizRoutingModule} from './quiz-routing';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    QuizRoutingModule
  ],
  declarations: [QuizComponent, PresentationComponent, SummaryComponent, QuizSelectionComponent]
})
export class QuizModule { }
