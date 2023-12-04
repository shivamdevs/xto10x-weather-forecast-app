import LocationIcon from "../assets/location.svg?react";
import useAppContext from "../context/useAppContext";
import convertToDMS from "../utils/convertToDMS";
import Search from "./Search";

function TopPanel() {
    const { information } = useAppContext();
    return (
        <header className="w-full flex flex-wrap md:flex-nowrap my-5 md:my-10 flex-row-reverse justify-center items-center gap-3 border-b border-b-gray-400 pb-2">
            <Search />
            <div className="mr-auto">
                <div className="inline-flex gap-3 items-center">
                    <LocationIcon />
                    <h1 className="text-2xl font-bold">{information ? `${information.name} ${information.state ? ", " + information.state : ""}, ${information.country}` : "--///--"}</h1>
                </div>
                <div className="text-gray-600">{information ? convertToDMS(information.lat, information.lon) : "--°--'--'' N/S & --°--'--'' E/W"}</div>
            </div>
        </header>
    )
}

export default TopPanel;