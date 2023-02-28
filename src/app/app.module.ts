import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, NewCmpComponent, HttpclientComponent],
  providers: [MyServiceService, HttpclientService],
})
export class AppModule {}
