import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { CardComponent } from './card/card.component';

import { EmpService } from './services/emp.service';
import { FormComponent } from './form/form.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CardComponent,
    FormComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
