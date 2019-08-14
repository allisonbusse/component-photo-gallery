import Component from './Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    onRender(dom) {
        const animals = this.props.animals;

        animals.forEach(animal => {
            const props = { animal: animal };
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="animals"></ul>
        `;
    }
}

export default ImageList;