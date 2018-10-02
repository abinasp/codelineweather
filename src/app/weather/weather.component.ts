import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html', 
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
}) 
export class WeatherComponent implements OnInit {

  woeidList = ['9807','638242','565346','44418','2344116','560743'];
  cityWeather = [];
  searchKeyword: any;

  constructor(private weatherService: WeatherService,
              private router: Router) { }

  ngOnInit() {
    this.getWeatherdData();
  }

  async getWeatherdData(){
    for(let i=0;i<this.woeidList.length; i++){
      // this.weatherService.getWeather(this.woeidList[i])
      // .then((response)=>{
      //   console.log(response);
      //   this.cityWeather.push(response);
      // })
      let weatherData = await this.weatherService.getWeather(this.woeidList[i]);
      this.cityWeather.push(weatherData);
    }
  }

  maxTemp(num:any){
    return Math.ceil(num); 
  }

  minTemp(num:any){
    return Math.floor(num);
  }

  onWeatherDetails(woeid:any){
    this.router.navigate(['/weather', woeid]);
  }

  searchResult(){
    this.router.navigate(['/weather','search',this.searchKeyword])
  }
} 
