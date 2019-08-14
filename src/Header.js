import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <img id="logo" src="/assets/s-l300.png">
            <h1>The Magic of Horns</h1>
        </header>
        `;
    }
}

export default Header;