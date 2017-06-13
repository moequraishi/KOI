import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    email: string;
    password: string;

    constructor(public authService: AuthService) {}

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    }

    logout() {
    this.authService.logout();
    }
}