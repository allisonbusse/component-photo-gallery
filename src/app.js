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
import FilterImages from './FilterImages.js';
import SortImages from './SortImages.js';

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

        //Sort Section
        const sortAnimalProps = {
            animals: animals,
            onSort: (animalHorns) => {
                let sortedAnimals;
                if(animalHorns === 'horns') {
                    sortedAnimals = animals.horns.sort((a, b) => a - b);
                }
                return sortedAnimals;
            }
        };

        const sortAnimals = new SortImages(sortAnimalProps);
        const sortAnimalsDOM = sortAnimals.renderDOM();
        const buttons = dom.querySelector('#buttons');
        const sortSection = dom.querySelector('#sort');
        sortSection.appendChild(sortAnimalsDOM);
        sortSection.classList.add('sort');
        buttons.appendChild(sortSection);
        

        //Filter Section
        const filterAnimalProps = {
            animals: animals,
            onFilter: (animalKeyword) => {
                let filteredAnimals;
                if(animalKeyword === 'all') {
                    filteredAnimals = animals;
                }
                else {
                    filteredAnimals = animals.filter(animal => {
                        return animal.keyword === animalKeyword;
                    });
                }

                const updateProps = { animals: filteredAnimals };
                imageList.update(updateProps);
            }
        };

        const filterAnimals = new FilterImages(filterAnimalProps);
        const filterAnimalsDOM = filterAnimals.renderDOM();

        const filterSection = dom.querySelector('#filters');
        filterSection.appendChild(filterAnimalsDOM);
        buttons.appendChild(sortSection);

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);
    }
    
    renderHTML() {
        return /*html*/`
            <div>
                    <!-- Header goes here -->
                <main>
                    <div id="buttons">
                    <section id="sort">
                    </section>
                    <section id="filters">
                    </section>
                    </div>
                    <section id="photo-cards">
                    </section>
                </main>
                    <!-- Footer goes here -->
            </div>
        `;
    }
}

export default App;
