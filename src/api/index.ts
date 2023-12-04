export const API_KEY = "ffcbb5402262cde738c157a54cb05d87";

export const API_PATH_SEARCH = `https://api.openweathermap.org/geo/1.0/direct?limit=10&APPID=${API_KEY}&q=:q:`;
export const API_PATH_INFO = `https://api.openweathermap.org/geo/1.0/reverse?APPID=${API_KEY}&lat=:lat:&lon=:lon:`;
export const API_PATH_DATA = `https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}&lat=:lat:&lon=:lon:8`;


export function api_query(str: string, key: ":lat:" | ":lon:" | ":q:", value: string) {
    return str.replace(key, encodeURIComponent(value));
}

export type SearchResult = WeatherLocations[];

export interface WeatherLocations {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string | null;
}


export interface WeatherForeCast {
    list: WeatherForeCastData[];
    city: WeatherForeCastCity;
}
export interface WeatherForeCastData {
    dt: number;
    main: WeatherForeCastMain;
    weather: WeatherForeCastEntity[];
    dt_txt: string;
}
export interface WeatherForeCastMain {
    temp_min: number;
    temp_max: number;
    humidity: number;
}
export interface WeatherForeCastEntity {
    main: string;
    icon: string;
}
export interface WeatherForeCastCity {
    sunrise: number;
    sunset: number;
}
