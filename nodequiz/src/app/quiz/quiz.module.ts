import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuizComponent, PresentationComponent, SummaryComponent]
})
export class QuizModule { }
