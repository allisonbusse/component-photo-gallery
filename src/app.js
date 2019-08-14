// import renderImage from './render-image.js';
// import images from '../../data/images.js';
// import htmlToDOM from '../src/utils/html-to-DOM.js';

// const list = document.querySelector('.animals');

// images.forEach(animal => {
//     const html = renderImage(animal);

//     const dom = htmlToDOM(html);

//     list.appendChild(dom);
// });
import Component from './Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import animals from '../data/images.js';
import ImageList from './ImageList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            animals: animals
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const photoCards = dom.querySelector('#photo-cards');
        photoCards.appendChild(imageListDOM);
    }
    
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
