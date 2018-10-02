import { Injectable } from "@angular/core";
import { HttpRequestService } from "../providers/http-request.service";
import { WeatherDetailsModel } from "../models/weather-details.model";
import { LinkPreviewModel } from "../models/link-preview.model";


@Injectable()

export class WeatherDeatilsService{
    constructor(public httpRequest: HttpRequestService){ 

    }

    getWeather(woeid:any){
        return new Promise<WeatherDetailsModel>((resolve,reject)=>{
            this.httpRequest.getWeatherHttp(woeid)
            .then((response)=>{ 
                resolve(response);
            },(error)=>{
                console.error("WeatherService getWeather error",error);
                reject(error);
            });
        });        
    }

    getLinkPreview(url:any){
        return new Promise<LinkPreviewModel>((resolve,reject)=>{
            this.httpRequest.getLinkPreview(url)
            .then((response)=>{
                resolve(response);
            },(error)=>{
                console.error("WeatherService getLinkPreview error",error);
                reject(error);
            });
        });
    }

    getWeatherIcon(icon:any){
        return new Promise((resolve,reject)=>{
            this.httpRequest.getWeatherIcon(icon)
            .then((response)=>{
                resolve(response);
            },(error)=>{
                console.error("WeatherService getWeatherIcon error",error);
                reject(error);
            });
        });
    }
}