import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FormsModule} from '@angular/forms';
import { ListComponantComponent } from './list-componant/list-componant.component';
import { CallServiceService } from './call-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CallServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
