import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedLibService } from '@nagpassignment/shared-lib';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loggedInCustomerId: string = "";
  loggedInUsername: string = "";
  routerA: Router;
  serviceA: SharedLibService;

  constructor(private router: Router, route: ActivatedRoute , service : SharedLibService) {
    this.routerA = router;
    this.serviceA = service;
  }

  ngOnInit(): void {
    
    if(localStorage.getItem('LoggedInUser') != '' && localStorage.getItem('LoggedInUser') != undefined
  && localStorage.getItem('LoggedInUser') != null){
    this.loggedInCustomerId = JSON.parse(localStorage.getItem('LoggedInUser') || '');
   
    if (this.loggedInCustomerId != null) {
      var userStr = localStorage.getItem(this.loggedInCustomerId);
      var user = JSON.parse(userStr!);
      this.loggedInUsername = user.name;
    }
  }

    this.serviceA.message$.subscribe(message => {
      console.log(message);
     });
  }

  logout() {
    localStorage.setItem("LoggedInUser", '');
    this.loggedInCustomerId = '';
    this.loggedInUsername = '';
  }
}
