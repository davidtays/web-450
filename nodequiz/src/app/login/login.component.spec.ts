import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {
 MatSidenavModule
} from '@angular/material/sidenav';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [BrowserModule, NgModule, MatInputModule, BrowserAnimationsModule, MatIconModule, FormsModule, MatMenuModule, MatToolbarModule, MatCardModule, MatFormFieldModule, FlexLayoutModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//david's unit tests from 
//https://medium.com/frontend-fun/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4
//REFERENCE:
//Rosa, S.(2017). Angular: Unit Testin Jasmin, Karma (step by step). Retrieved from https://medium.com/frontend-fun/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4
  it("should have as text 'login page'", async(() => {
    expect(component.text).toEqual('login page');
  }));

  it("should set submitted to true", async(() => {
    component.onSubmit('2322');
    expect(component.submitted).toBeTruthy();
  }));


});
