// author: david tays

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing';
import { QuizModule } from './quiz/quiz.module';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { LoggedInRouteGuardService } from './services/logged-in-route-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,     
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    QuizModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggedInRouteGuardService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
