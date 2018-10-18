import {RouterModule, Routes} from '@angular/router';
import {CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SummaryComponent } from './summary/summary.component';
import { NgModule } from '@angular/core';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { LoggedInRouteGuardService } from '../services/logged-in-route-guard.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'present', component: PresentationComponent},//
    {path: 'quiz', component: QuizComponent},//
    {path: 'summary', component: SummaryComponent},//, canActivate:[LoggedInRouteGuardService]
    {path: 'select:quizzes', component: QuizSelectionComponent}//
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
export class QuizRoutingModule{}