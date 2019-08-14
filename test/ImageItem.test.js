import ImageItem from '../src/ImageItem.js';

const test = QUnit.test;
QUnit.module('render HTML from data');
test('render html', (assert) => {
   // Arrange
    const animal = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };
    const expected = /*html*/`
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
   // Act
    const props = { animal: animal };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
   // Assert
    assert.htmlEqual(html, expected);
});