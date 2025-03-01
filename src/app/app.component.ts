import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LoginComponent, SignupComponent], // Use imports array for standalone components
})
export class AppComponent {
  title = 'radha';
  // x = 10;
  // y = 20;

  name="Ayushi kr"

  updateName(){
  //   this.name=20->error
  }
}

