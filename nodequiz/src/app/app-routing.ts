import {RouterModule, Routes} from '@angular/router';
import {CommonModule } from '@angular/common';
import { QuizModule } from './quiz/quiz.module';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { PresentationComponent } from './quiz/presentation/presentation.component';
import { SummaryComponent } from './quiz/summary/summary.component';
import { NgModule } from '@angular/core';
import { QuizSelectionComponent } from './quiz/quiz-selection/quiz-selection.component';

const routes: Routes = [
    {path: 'select', component: QuizModule} //QuizModule, children:[{path:'quiz', component: QuizSelectionComponent}]}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ],
    declarations:[]
})
export class AppRoutingModule{}