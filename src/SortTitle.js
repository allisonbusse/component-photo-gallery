import Component from './Component.js';

class SortTitle extends Component {
    onRender(input) {
        const onSort = this.props.onSort;

        input.addEventListener('input', () => {
            onSort(input.value);
        });
    }
    
    renderHTML() {
        return /*html*/`
        <input id="title" name="sort" value="title" type="radio">
        `;
    }
}

export default SortTitle;