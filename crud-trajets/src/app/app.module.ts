import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTrajetsComponent } from './liste-trajets/liste-trajets.component';
import { TrajectComponent } from './traject/traject.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {  HttpClientModule } from '@angular/common/http';
import { EditTrajectComponent } from './edit-traject/edit-traject.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeTrajetsComponent,
    TrajectComponent,
    EditTrajectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false // return entity after PUT/update
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
