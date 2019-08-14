import Component from './Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    renderHTML() {
        const animals = this.props.animals;
        const keywords = getUniqueKeywords(animals);
        const optionsHTML = renderOptionsHTML(keywords);

        return /*html*/`
                <select>
                    <option value="all">All</option>
                    ${optionsHTML}
                </select>
        `;
    }

}

function getUniqueKeywords(animals) {
    const keywords = [];
    animals.forEach(animal => {
        if(!keywords.includes(animal.keyword)) {
            keywords.push(animal.keyword);
        }
    });
    keywords.sort();
    return keywords;
}

function renderOptionsHTML(keywords) {
    const optionsArray = keywords.map(keyword => {
        return /*html*/`
        <option value="${keyword}">${keyword}</option>
        `;
    });

    return optionsArray.join('');
}

export default FilterImages;