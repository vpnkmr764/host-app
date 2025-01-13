import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Policy } from './policy.model';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Insurance Management';

  ngOnInit(): void {
      var usr = new User();
      usr.customerId="3175765";
      usr.name="Rajesh";
      usr.password="Rajesh";

      var policy = new Policy();
      policy.policyId ="#1223";
      policy.policyName ="AX-Policy";
      policy.permiumAmt ="3500";

      usr.policy=policy;

      var usr1 = new User();
      usr1.customerId="3175767";
      usr1.name="Atharv";
      usr1.password="Atharv";

      var policy1 = new Policy();
      policy1.policyId ="#1559";
      policy1.policyName ="MN-Policy";
      policy1.permiumAmt ="2300";

      usr1.policy=policy1;

      localStorage.setItem("3175765",JSON.stringify(usr));
      localStorage.setItem("3175767",JSON.stringify(usr1));

      fromEvent(window,'event').subscribe((event:any) =>{
        console.log(event.detail)
        console.log(event.detail['customerId']);       
      });
    }
}
