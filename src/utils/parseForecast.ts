import { WeatherForeCast, WeatherForeCastData } from "../api"
import { GeoForeCast, GeoPosition } from "../context/context";
import formatDate from "./formatDate";
import formatTemperature from "./formatTemp";
import formatTime from "./formatTime";


function parseForecast(position: GeoPosition, data: WeatherForeCast) {
    const list: { [key: string]: WeatherForeCastData[] } = {};
    const rest: GeoForeCast[] = [];

    data.list.forEach(item => {
        const key = formatDate(item.dt_txt);
        if (!list[key]) list[key] = [];
        list[key].push(item);
    });

    for (const key in list) {
        const items = list[key];
        const item = items[0];
        const cast: GeoForeCast = {
            date: formatDate(item.dt_txt),
            key: "" + position?.lat + position?.lon + item.dt,
            icon: item.weather[0].icon,
            main: item.weather[0].main,
            temp_high: formatTemperature(items.reduce((acc, i) => acc + i.main.temp_max, 0) / items.length),
            temp_low: formatTemperature(items.reduce((acc, i) => acc + i.main.temp_min, 0) / items.length),
            humidity: (items.reduce((acc, i) => acc + i.main.humidity, 0) / items.length).toFixed(0) + "%",
            sunrise: formatTime(data.city.sunrise),
            sunset: formatTime(data.city.sunset),
        };
        rest.push(cast);
    }

    console.log(list, rest);

    return rest;
}

export default parseForecast