import { createContext,useContext } from "react";

export const WeatherContext = createContext({
    long: 0,
    lat: 0,
    weather:""
});

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = WeatherContext.Provider;

