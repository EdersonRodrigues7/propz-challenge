import products from './products.json' assert {type: 'json'};

const imgPath = '../assets/images/';
const panel = document.getElementById('promotions-panel');

const renderProducts = (products) =>{
    products.map(product =>{
        const price = product.fullPrice;
        const discount = product.discount;
        const finalPrice = price - (price*(discount/100)).toFixed(2);
        panel.insertAdjacentHTML('afterbegin',`
        <div class="product-card">
            <div><img src="${imgPath}${product.photo}" alt="${product.name}"></div>
            <a href="/#${product.id}"<p class="product-description">${product.name}</p></a>
            <span class="promotion-deadline">Válido até 08/12/2022, em todas as lojas físicas, no site e no app</span>
            <p class="product-price">Por: R$${finalPrice}</p>
            <span class="promotion-discount">${discount}% de desconto!</span>
        </div>
        `);
    });
}

renderProducts(products);