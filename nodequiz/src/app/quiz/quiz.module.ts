import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SummaryComponent } from './summary/summary.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizRoutingModule} from './quiz-routing';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    MatToolbarModule,
    QuizRoutingModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  declarations: [QuizComponent, PresentationComponent, SummaryComponent, QuizSelectionComponent]
})
export class QuizModule { }
