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
        const horns = getHorns(animals);
        return /*html*/`
        <label>Number of Horns: <input name="sort" value="horns" type="radio"> </label>
        `;
    }
}

function getHorns(animals) {
    const horns = [];
    animals.forEach(animal => {
        horns.push(animal.horns);
    });
    horns.sort((a, b) => a - b);
    return horns;
}

export default SortImages;