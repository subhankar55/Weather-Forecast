import axios from "axios";


async function forecast(city,date){
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
        const weather = response.data.list.find(item => new Date(item.dt_txt) >= new Date(date));
        return {
            weather: weather,
            coordinates: response.data.city.coord
        }

    } catch (error) {
        console.log(error.message);
    }

}

export default forecast;