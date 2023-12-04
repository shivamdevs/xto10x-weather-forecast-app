import useAppContext from '../context/useAppContext'
import Card from './Card';
import Grid from './Grid'
import CalenderIcon from "../assets/calender.svg?react";

function ForeCast() {
    const { forecast } = useAppContext();

    if (!forecast) return <span className="w-full inline-flex justify-center my-40"><l-ring size="60" stroke="6" bg-opacity="0" speed="2" color="#5a92ee" /></span>;

    return (
        <Grid>
            <Card
                header={<div className="w-full text-left">
                    <span className="inline-block">Select Date</span>
                    <span className="inline-flex px-5 py-3 mt-1 gap-2 rounded border border-black/30 bg-gray-200">
                        <CalenderIcon />
                        {forecast[0].date}
                    </span>
                </div>}
                temp_high="High Temperature"
                temp_low="Low Temperature"
                humidity="Humidity"
                sunrise="Sunrise Time"
                sunset="Sunset Time"
            />
            {forecast.map((item) => <Card
                prefix={item.date}
                key={item.key}
                layout
                header={<div className="inline-flex items-center gap-3 py-2">
                    <span className="p-1 w-10 h-10 bg-[#60656B] rounded-full">
                        <img className="scale-125" key={item.icon} src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} width={60} height={60} alt={item.key} />
                    </span>
                    <span className="text-2xl font-bold">{item.main}</span>
                </div>}
                temp_high={item.temp_high}
                temp_low={item.temp_low}
                humidity={item.humidity}
                sunrise={item.sunrise}
                sunset={item.sunset}
            />)}
        </Grid>
    )
}

export default ForeCast