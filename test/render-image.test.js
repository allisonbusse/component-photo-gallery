import renderImage from '../configs/src/render-image.js';

const test = QUnit.test;

QUnit.module('render image');

test('renders li', assert => {
    const animal =
    {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
        <li title="A unicorn and a narwhal nuzzling their horns">
            <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                alt="UniWhal image">
                </div>
            <div class="image-text">
                <h2>UniWhal</h2>
                <p>Number of Horns: 1</p>
            </div>
        </li>
        `;

    const html = renderImage(animal);

    assert.htmlEqual(html, expected);


});