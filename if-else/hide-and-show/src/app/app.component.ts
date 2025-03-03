import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProfileComponent], // Use imports array for standalone components
})
export class AppComponent {
  display=true;
  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
}
