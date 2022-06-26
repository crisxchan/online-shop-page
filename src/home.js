import products from './data/products.json5';

const createHome = () => {
    const div = document.createElement('div');
    div.classList.add('main-wrapper');

    products.productsList.forEach(product => {
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('product-div', 'left-div');
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('product-div', 'right-div');

        const section = document.createElement('section');
        section.classList.add('main-product');
        section.style.backgroundColor = product.bgColorHex;

        const productHeader = document.createElement('h2');
        productHeader.classList.add('product-header')

        const productLabel = document.createElement('p');
        productLabel.classList.add('product-label');

        const learnMoreBtn = document.createElement('button');
        learnMoreBtn.classList.add('learnMore-btn');
        learnMoreBtn.innerHTML = 'Learn More';

        const productImg = document.createElement('img');
        productImg.src = `../assets/products/${product.imgFileName}`;
        productImg.classList.add('product-img');

        productHeader.innerHTML = product.productName;
        productLabel.innerHTML = product.productLabel;

        leftDiv.appendChild(productHeader);
        leftDiv.appendChild(productLabel);
        leftDiv.appendChild(learnMoreBtn);
        rightDiv.appendChild(productImg);

        section.appendChild(leftDiv);
        section.appendChild(rightDiv);

        div.appendChild(section);
    });

    return div;
}

export default createHome;