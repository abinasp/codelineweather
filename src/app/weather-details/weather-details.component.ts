import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDeatilsService } from './weather-details.service';
import { WeatherDetailsModel } from '../models/weather-details.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
  providers: [WeatherDeatilsService]
})
export class WeatherDetailsComponent implements OnInit {

  weatherWoeid:any;
  weatherDetails= new WeatherDetailsModel;
  weatherIcon: any;
  isLoading=false;
  weatherSources=[];

  constructor(private route:ActivatedRoute,
              private weatherDetailsService: WeatherDeatilsService) {
    this.weatherWoeid = this.route.snapshot.params['woeid'];
   }

  ngOnInit() {
    this.weatherDetailsService.getWeather(this.weatherWoeid)
    .then((response)=>{
      this.weatherDetails = response;
      this.isLoading = true;
      console.log(this.weatherDetails);
      // this.weatherDetailsService.getWeatherIcon(this.weatherDetails.consolidated_weather[0].weather_state_abbr)
      // .then((response)=>{
      //   this.weatherIcon = response;
      //   console.log(this.weatherIcon);
      // })
      for(let i=0;i<this.weatherDetails.sources.length;i++){
        this.weatherDetailsService.getLinkPreview(this.weatherDetails.sources[i].url)
        .then((response)=>{
          this.weatherSources.push(response);
        });
      }
    },(error)=>{ 
      console.error("WeatherDeatils component Error: ",error); 
    })
  }
  maxTemp(num:any){
    return Math.ceil(num); 
  }

  minTemp(num:any){
    return Math.floor(num);
  }

  onWeatherSourceDetails(url:any){
    window.open(url, '_blank');
  }

}
