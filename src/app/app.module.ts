import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HttpRequestService } from './providers/http-request.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'weather/:woeid', component: WeatherDetailsComponent },
  { path: 'weather/search/:keyword', component: SearchComponent},
  { path: 'weather', component:WeatherComponent},
  {path: '**', redirectTo: '/weather'}
] 

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    HttpRequestService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
