export default function markerElement(icon = ""){
    let element = document.createElement('div')

        element.innerHTML = `
          <div style="
            font-size: 15px;
            border-radius: 10%;
            padding: 5px;
          ">
             <img
                src="https://openweathermap.org/img/wn/${icon}@2x.png"
                alt="weather-icon"
             />
          </div>
        `

    return element;

  }
  
