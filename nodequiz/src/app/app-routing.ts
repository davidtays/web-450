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
    {path: '', component: LoginComponent},
    {path: 'present', component: PresentationComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'select', component: QuizSelectionComponent} //QuizModule, children:[{path:'quiz', component: QuizSelectionComponent}]}
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