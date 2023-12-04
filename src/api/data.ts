import { API_PATH_DATA, WeatherForeCast, api_query } from ".";
import { GeoPosition } from "../context/context";

async function fetchForecast(pos: GeoPosition) {
    if (!pos) return Promise.resolve(null);
    let param = API_PATH_DATA;
    param = api_query(param, ":lat:", pos.lat.toString());
    param = api_query(param, ":lon:", pos.lon.toString());
    const res = await fetch(param);
    return await (res.json() as Promise<WeatherForeCast>);
}

export default fetchForecast;