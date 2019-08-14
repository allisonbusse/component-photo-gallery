// import renderImage from './render-image.js';
// import images from '../../data/images.js';
// import htmlToDOM from '../src/utils/html-to-DOM.js';

// const list = document.querySelector('.animals');

// images.forEach(animal => {
//     const html = renderImage(animal);

//     const dom = htmlToDOM(html);

//     list.appendChild(dom);
// });
import Header from './Header.js';
import Footer from './Footer.js';
import images from '../data/images.js';

import Component from './Component.js';

class App extends Component {
    renderHTML() {
        return /*html*/`
            <div>
                    <!-- Header goes here -->
                <main>
                    <section id="filters">
                    </section>
                    <section id="photo-cards">
                    </section>
                </main>
                    <!-- Footer goes here -->
            </div>
        `;
    }
}

export default App;
