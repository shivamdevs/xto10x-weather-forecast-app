function formatTemperature(celsius: number): string {
    const celsiusString = `${celsius.toFixed(0)}°C`;
    const fahrenheitString = `${((celsius * 9 / 5) + 32).toFixed(0)}°F`;
    return `${celsiusString} / ${fahrenheitString}`;
}

export default formatTemperature;