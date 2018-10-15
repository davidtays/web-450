import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private router: Router){}
  ngOnInit() {
    localStorage.setItem('id', '');
    localStorage.setItem('quizId', '');
  }

  onSubmit(){
    localStorage.setItem('id', '');
    localStorage.setItem('quizId', '');
    this.router.navigateByUrl('');
  }

}
