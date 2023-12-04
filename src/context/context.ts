import React from "react";

export type GeoPosition = {
    lat: number;
    lon: number;
} | null;

export type GeoInformation = {
    name: string;
    state?: string | null;
    country: string;
    lat: number;
    lon: number;
} | null;

export type GeoForeCast = {
    date: string;
    key: string;
    icon: string;
    main: string;
    temp_high: string;
    temp_low: string;
    humidity: string;
    sunrise: string;
    sunset: string;
};

export type GeoCollection = GeoForeCast[] | null;

export interface AppContextValue {
    position: GeoPosition;
    setPosition: React.Dispatch<React.SetStateAction<GeoPosition>>;
    information: GeoInformation;
    setInformation: React.Dispatch<React.SetStateAction<GeoInformation>>;
    forecast: GeoCollection;
    setForecast: React.Dispatch<React.SetStateAction<GeoCollection>>;
}

const AppContext = React.createContext<AppContextValue>({
    position: null,
    setPosition: () => { },
    information: null,
    setInformation: () => { },
    forecast: null,
    setForecast: () => { },
});

export default AppContext;