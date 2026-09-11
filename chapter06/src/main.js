import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${import.meta.env.VITE_APP_TITLE}</h1>
    <p>
      現在のモード: ${import.meta.env.MODE}
    </p>
    <div>
      <button id="counter" type="button"></button>
    </div>
    <p>
      We are studying JavaScript
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
