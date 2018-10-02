export class WeatherDetailsModel{
    consolidated_weather: Array<ConsolidatedWeatherModel>;
    latt_long:string;
    location_type: string;
    parent: ParentModel;
    sources: Array<SourceModel>;
    sun_rise:string;
    sun_set:string;
    time: string;
    timezone: string;
    timezone_name:string;
    title: string;
    woeid: string;
}

export class ConsolidatedWeatherModel{
    id:string;
    air_pressure: string;
    applicable_date: string;
    created: string;
    humidity: string;
    max_temp: string;
    min_temp: string;
    predictability: string;
    the_temp: string;
    visibility: string;
    weather_state_abbr: string;
    weather_state_name: string;
    wind_direction: string;
    wind_direction_compass: string;
    wind_speed: string;
}

export class ParentModel{
    latt_long: string;
    location_type: string;
    title: string;
    woeid: string;
}

export class SourceModel{
    crawl_rate: string;
    slug: string;
    title: string;
    url: string;
}

export class WeathersModel{
    allWeatherDetails: Array<WeatherDetailsModel>;
}