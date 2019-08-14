import Component from './Component.js';

class Footer extends Component {
    renderHTML() {
        return /*html*/`
            <footer>
                &copy; Made by A&sup2;
            </footer>
        `;
    }
}

export default Footer;