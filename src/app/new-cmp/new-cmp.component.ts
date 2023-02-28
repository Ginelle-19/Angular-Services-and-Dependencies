import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponent = 'Entered in newcomponent';
  constructor(private myservice: MyServiceService) {}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }
}
