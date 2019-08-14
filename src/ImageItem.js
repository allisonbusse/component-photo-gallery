import Component from './Component.js';

class ImageItem extends Component {
    renderHTML() {
        const animal = this.props.animal;

        return /*html*/`
            <li title="${animal.description}">
                <div class="image-container">
                    <img src="${animal.url}" alt="${animal.title} image">
                </div>
                <div class="image-text">
                    <h2>${animal.title}</h2>
                    <p>Number of Horns: ${animal.horns}</p>
                </div>
            </li>
        `;
    }
}

export default ImageItem;