import React, { useEffect, useState } from "react";
import AppContext, { GeoCollection, GeoInformation, GeoPosition } from "./context";
import toast from "react-hot-toast";
import fetchInformation from "../api/info";
import fetchForecast from "../api/data";
import parseForecast from "../utils/parseForecast";

export interface ContextWrapperProps {
    children: React.ReactNode;
}

function ContextWrapper({ children }: ContextWrapperProps) {

    const [position, setPosition] = useState<GeoPosition>(null);
    const [information, setInformation] = useState<GeoInformation>(null);
    const [forecast, setForecast] = useState<GeoCollection>(null);

    useEffect(() => {
        if (!position || information) return;
        const tid = toast.loading("Fetching your location's weather information...");
        fetchInformation(position).then((info) => {
            if (info && info.length) {
                const data = info[0];
                setInformation({
                    name: data.name,
                    state: data.state,
                    country: data.country,
                    lat: data.lat,
                    lon: data.lon,
                });
                toast.dismiss(tid);
            }
        }).catch((err) => {
            console.error(err);
            toast.error("Failed to get your location's weather information. Reload and try again.");
        });
    }, [information, position]);

    useEffect(() => {
        if (!position) return;
        const tid = toast.loading("Fetching weather forecast...");
        fetchForecast(position).then((info) => {
            if (info) {
                setForecast(parseForecast(position, info));
                toast.dismiss(tid);
            }
        }).catch((err) => {
            console.error(err);
            toast.error("Failed to get weather forecast. Reload and try again.");
        });
    }, [position]);

    return (
        <AppContext.Provider value={{ position, setPosition, information, setInformation, forecast, setForecast }}>
            {children}
        </AppContext.Provider>
    );
}

export default ContextWrapper;