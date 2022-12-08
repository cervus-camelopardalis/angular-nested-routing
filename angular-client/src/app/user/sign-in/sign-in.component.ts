import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true;

  formSignIn = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  getErrorMessageEmail() {
    return this.formSignIn.controls['email'].hasError('required') ? 'E-mail is required' : '';
  }

  getErrorMessagePassword() {
    return this.formSignIn.controls['password'].hasError('required') ? 'Password is required' : '';
  }

  /* ABOVE THIS: Error messages for better UX */
  /*************************************************************************************************/
  /*************************************************************************************************/
  /*************************************************************************************************/
  /* BELOW THIS: Subscription and communication with backend (i.e., Express server) */
  /* BELOW THIS: Redirection to the Dashboard component */

  setUserJWT: any = '';
    
  onSubmitSignIn() {
    const signinObserver = {

      /* (2) Get user JWT which is generated on sign in */
      next: (x: any) => {
        this.setUserJWT = x.accessToken; /* (3) Store user JWT in setUserJWT */
        localStorage.setItem('jwt', this.setUserJWT); /* (4) Store user JWT in localStorage */
        console.log('Observer got a next value: ' + 'Sign in successful');

        this.signinRouter.navigate(['/sign-in-successful']);
      },

      error: (err: any) => {
        console.log('Observer got an error: ' + err.status);

        if (err.status == 400) {
          console.log('Incorrect e-mail or password');

          this.snackBar.open('Incorrect e-mail or password, please sign in again', 'Close', { duration: 5000, panelClass: ['my-red-snackbar-2'] });
        }
      },

      complete: () => {
        console.log('Observer got a complete notification');
      }

    };

    /* (1) Subscribe and communicate with backend (i.e., Express server) */
    this.authService.signin(this.formSignIn.value).subscribe(signinObserver);
  }

  constructor(private authService: AuthService, private signinRouter: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}