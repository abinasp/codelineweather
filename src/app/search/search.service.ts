import { Injectable } from "@angular/core";
import { HttpRequestService } from "../providers/http-request.service";
import { SearchWeathersModel } from "../models/search-weather.model";
import { WeatherDetailsModel } from "../models/weather-details.model";
import { LinkPreviewModel } from "../models/link-preview.model";


@Injectable()

export class SeacrhService{
    searchModel = new SearchWeathersModel;
    constructor(public httpRequest: HttpRequestService){ 

    }

    getSearchedWeather(search:any){
        return new Promise<SearchWeathersModel>((resolve,reject)=>{
            this.httpRequest.getWeatherOfQuery(search)
            .then((response)=>{
                this.searchModel.allSearches = response;
                resolve(response);
            },(error)=>{
                console.error("SeacrhService getSearchedWeather error",error);
                reject(error);
            })
        })
    }

    getWeather(woeid:any){
        return new Promise<WeatherDetailsModel>((resolve,reject)=>{
            this.httpRequest.getWeatherHttp(woeid)
            .then((response)=>{ 
                resolve(response);
            },(error)=>{
                console.error("SeacrhService getWeather error",error);
                reject(error);
            });
        });   
        // let weatherData = await this.httpRequest.getWeatherHttp(woeid);
        // return weatherData;
    }
    

    getLinkPreview(url:any){
        return new Promise<LinkPreviewModel>((resolve,reject)=>{
            this.httpRequest.getLinkPreview(url)
            .then((response)=>{
                resolve(response);
            },(error)=>{
                console.error("SeacrhService getLinkPreview error",error);
                reject(error);
            });
        });
    }
}