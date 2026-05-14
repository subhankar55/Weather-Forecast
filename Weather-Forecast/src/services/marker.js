export default function markerElement(icon = '☀️'){
    let element = document.createElement('div')

        element.innerHTML = `
          <div style="
            font-size: 35px;
            border-radius: 50%;
            padding: 10px;
          ">
            ${icon}
          </div>
        `

    return element;

  }
  
