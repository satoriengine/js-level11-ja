import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>chapter07 最終問題</h1>
    <p>
      ${import.meta.env.VITE_APP_MESSAGE}
    </p>
    <p>
      現在のモード: ${import.meta.env.MODE}
    </p>
    <div>
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
