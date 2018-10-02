export class SearchWeatherModel{
    title: string;
    location_type: string;
    woeid: string;
    latt_long: string;
}

export class SearchWeathersModel{
    allSearches: Array<SearchWeatherModel>;
}