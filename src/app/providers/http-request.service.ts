import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { Constant } from '../constants/Constants';


@Injectable()

export class HttpRequestService {
  constructor(private http: Http){

  }

  getWeatherOfQuery(query:any) {
    let that=this;
    return that.http.get(Constant.API_URL + "?command=search&keyword=" + query)
    .toPromise() 
    .then(response => response.json());
  }

  getWeatherHttp(woeid:any){
    let that=this;
    return that.http.get(Constant.API_URL + "?command=location&woeid=" + woeid)
    .toPromise()
    .then(response => response.json()); 
  }

  getLinkPreview(url: any) {
    return this.http.get(Constant.LINK_PREVIEW_URL + url)
      .toPromise()
      .then(response => response.json());
  }

  getWeatherIcon(icon:any){
    let that=this;
    return that.http.get('https://www.metaweather.com/static/img/weather/'+icon+'.svg')
    .toPromise()
    .then(response=>response.json());
  }
}
