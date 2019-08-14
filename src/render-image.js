export default function renderImage(animal) {
    const html = /*html*/`
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
    return html;
}