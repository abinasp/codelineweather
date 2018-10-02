import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeacrhService } from './search.service';
import { SearchWeathersModel } from '../models/search-weather.model';
import { WeatherDetailsModel } from '../models/weather-details.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SeacrhService]
})
export class SearchComponent implements OnInit {

  searchWeather: any;
  searchWeathersList = new SearchWeathersModel;
  weatherDetails = new WeatherDetailsModel;
  isLoading = false;
  isNewLoading = false;
  weatherSources = [];


  constructor(private route: ActivatedRoute,
    public searchService: SeacrhService) {
    this.searchWeather = this.route.snapshot.params['keyword'];
  }

 ngOnInit() {
   this.searchService.getSearchedWeather(this.searchWeather)
      .then((searchResponse) => {
        this.searchWeathersList.allSearches = this.searchService.searchModel.allSearches;
        if (this.searchWeathersList.allSearches.length != 0) {
          this.searchService.getWeather(this.searchWeathersList.allSearches[0].woeid)
            .then((response) => {
              this.weatherDetails = response;
              this.isLoading = true;
              for (let j = 0; j < this.weatherDetails.sources.length; j++) {
                this.searchService.getLinkPreview(this.weatherDetails.sources[j].url)
                  .then((response) => {
                    this.weatherSources.push(response);
                  }, (error) => {
                    console.error("SearchComponent Error: ", error);
                  });
              }
            });
        } else {
          this.isLoading = false;
          this.isNewLoading = true;
        }
      });
  }

  maxTemp(num: any) {
    return Math.ceil(num);
  }

  minTemp(num: any) {
    return Math.floor(num);
  }

  onWeatherSourceDetails(url: any) {
    window.open(url, '_blank');
  }
}
