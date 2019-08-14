import Component from './Component.js';

class SortImages extends Component {
    onRender(input) {
        const onSort = this.props.onSort;

        input.addEventListener('input', () => {
            onSort(input.value);
        });
    }
    
    renderHTML() {
        const animals = this.props.animals;

        return /*html*/`
        <input id="horns" name="sort" value="horns" type="radio">
        `;
    }
}

export default SortImages;