import { Component, VERSION } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'middemo';
  todaydate;
  // serviceproperty;
  componentproperty;
  constructor(private myservice: MyServiceService) {}
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = 'component created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}
// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   //INTERPOLATION
//   appName =
//     'This printout is an example of string interpolation using one-way data binding';
//   //PROPERTY BINDING
//   clientName: string = 'Andrew';
//   // STYLE BINDING
//   appliedCSSClass = 'green';
//   notappliedCSSClass = false;
//   myColor = 'red';
//   myName = '';
//   // EVENT BINDING
//   showData($event: any) {
//     console.log('button is clicked!');
//     if ($event) {
//       console.log($event.target);
//       console.log($event.target.value);
//     }
//   }
