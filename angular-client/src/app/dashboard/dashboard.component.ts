import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayUserData: any = '';

  readonly getuserObserver = {

    /* (2) Get user data */
    next: (x: any) => {
      this.displayUserData = x; /* (3) Store user data in displayUserData */
      console.log('Observer got a next value: ' + 'Data fetched successfully');
    },

    error: (err: any) => {
      console.log('Observer got an error: ' + err.status);
    },

    complete: () => {
      console.log('Observer got a complete notification');
    }

  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    /* (1) Subscribe and communicate with backend (i.e., Express server) */
    this.authService.getuser(this).subscribe(this.getuserObserver);
  }

}
