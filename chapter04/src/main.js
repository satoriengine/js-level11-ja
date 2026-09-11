import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>chapter04</h1>
    <div>
      <button id="counter" type="button"></button>
    </div>
    <p>
      We are studying JavaScript
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
