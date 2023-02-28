import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, NewCmpComponent],
  providers: [MyServiceService],
})
export class AppModule {}
