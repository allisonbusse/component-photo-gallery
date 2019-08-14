import renderImage from './render-image.js';
import images from '../../data/images.js';
import htmlToDOM from '../src/utils/html-to-DOM.js';

const list = document.querySelector('.animals');

images.forEach(animal => {
    const html = renderImage(animal);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});
