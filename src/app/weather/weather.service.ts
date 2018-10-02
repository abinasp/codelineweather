import { Injectable } from "@angular/core";
import { HttpRequestService } from "../providers/http-request.service";


@Injectable()

export class WeatherService{
    constructor(public httpRequest: HttpRequestService){ 

    }

    getWeatherQuery(query:any){
        return new Promise((resolve,reject)=>{
            this.httpRequest.getWeatherOfQuery(query)
            .then((response)=>{
                resolve(response);
            },(error)=>{
                console.error("WeatherService getWeatherQuery error",error);
                reject(error);
            });
        });
    }

    async getWeather(woeid:any){
        // return new Promise((resolve,reject)=>{
        //     this.httpRequest.getWeatherHttp(woeid)
        //     .then((response)=>{ 
        //         resolve(response);
        //     },(error)=>{
        //         console.error("WeatherService getWeather error",error);
        //         reject(error);
        //     })
        // })
        let weatherData = await this.httpRequest.getWeatherHttp(woeid); 
        return weatherData;
    }
}