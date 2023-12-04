import { useCallback, useEffect, useState } from "react";
import useAppContext from "../context/useAppContext";

function GeoLocal() {
    const [loading, setLoading] = useState<boolean>(true);

    const [failed, setFailed] = useState<boolean>(false);

    const { setPosition } = useAppContext();

    const getGeoPosition = useCallback(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
            });
            setLoading(false);
        }, () => {
            setFailed(true);
        });
    }, [setPosition]);

    useEffect(() => {
        getGeoPosition();
    }, [getGeoPosition]);

    const refetchGeoLocation = () => {
        setFailed(false);
        getGeoPosition();
    }


    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-black/60 text-white p-3 pl-5 rounded-full inline-flex items-center gap-3">
                {failed
                    ? <>
                        Failed to get Location services
                        <button type="button" className="transition-all px-3 py-1 rounded-full hover:bg-white/20 border border-white/20" onClick={refetchGeoLocation}>Try again</button>
                    </>
                    : <>
                        <l-ring size="20" stroke="3" bg-opacity="0" speed="2" color="#5a92ee" />
                        Allow Location services to get Weather data
                    </>
                }
            </div>
        </div>
    )
}

export default GeoLocal;