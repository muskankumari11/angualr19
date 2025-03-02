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
  count=0

  handleCounter(val:string){
    if(val=='minus'){
      this.count=this.count-1
    } else if(val=='plus'){
      this.count=this.count+1;
    } else{
      this.count=0
    }
  }
}
