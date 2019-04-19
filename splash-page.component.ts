import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { User } from '../user-data.model'
import { UserService } from '../user.service'


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
  providers: [AuthenticationService, UserService ]
})
export class SplashPageComponent implements OnInit {
  registerForm: FormGroup;
  user;
  public currentUser: User;
  private isLoggedIn: Boolean;
  private username: string;
  users: FirebaseListObservable<any[]>;

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router, public userService: UserService) {
    this.authService.user.subscribe(user => {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.username = user.displayName;
     }
      console.log(user);
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  login() {
    this.authService.login();
    this.authService.user.subscribe(user => {
     if (this.isLoggedIn === true) {

       this.router.navigate(['/user', this.username]);
     }
   });
  }

}
