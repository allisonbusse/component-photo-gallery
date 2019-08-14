import App from './app.js';

const root = document.getElementById('root');
const app = new App();

const dom = app.renderDOM();

root.appendChild(dom);