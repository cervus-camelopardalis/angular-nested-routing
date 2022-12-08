import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://localhost:5000/';

  /***************************************************/
  /********************* Sign up *********************/
  /***************************************************/
  signup(model: any) {
    return this.http.post(this.authUrl + 'users/signup', model).pipe();
  }

  /***************************************************/
  /********************* Sign in *********************/
  /***************************************************/
  signin(model: any) {
    return this.http.post(this.authUrl + 'users/signin', model).pipe();
  }

  /**************************************************/
  /******************** Get user ********************/
  /**************************************************/
  getuser(model: any) {
    return this.http.get(this.authUrl + 'users', model).pipe();
  }

  /***************************************************/
  /************* Check if user signed in *************/
  /***************************************************/
  signedIn() {
    return !!localStorage.getItem('jwt');
  }

  /**************************************************/
  /******************** Sign out ********************/
  /**************************************************/
  signOut() {
    return localStorage.removeItem('jwt');
  }

  constructor(private http: HttpClient) { }
  
}
