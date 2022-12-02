import products from './products.json' assert {type: 'json'};

const visaLogo = '../assets/images/visa-logo.png';
const masterLogo = '../assets/images/logo-master.png';
const imgPath = '../assets/images/';
const carousel = document.querySelector('.carousel-inner');

const renderProducts = (products) =>{
    let activeSlide;
    products.map(product =>{
        products.indexOf(product) === 0 ? activeSlide = 'active' : activeSlide = '';
        const credit = (product.fullPrice/10).toFixed(2);
        const fees = (product.fullPrice * 1.2/15).toFixed(2);
        console.log(product.fullPrice, product.fullPrice/10);
        carousel.insertAdjacentHTML('afterbegin',`
            <div class="carousel-item ${activeSlide}">
                <a href="/${product.id}"><img src="${imgPath}${product.photo}" class="d-block" alt="${product.name}"></a>
                <div class="product-description">
                    <h3><a href="/${product.id}">${product.name}</a></h3>
                    <p>${product.detail}</p>
                </div>
                <div class="product-payment">
                    <div class="product-prices">
                        <div class="price-credit">
                            <p>10 X </p><span class="price-value">R$${credit}</span>
                            <span class="fees">sem juros</span>
                        </div>
                        <div class="price-credit">
                            <p>15 X </p><span class="price-value">R$${fees}</span>
                            <span class="fees">com juros</span>
                        </div>
                    </div>
                    <div class="payment-methods">
                        <div class="card-flags">
                            <img src="${visaLogo}" alt="Logo Visa">
                            <img src="${masterLogo}" alt="Logo Mastercard">
                        </div>
                        <div>
                            <p>ou <b>R$${product.fullPrice.toFixed(2)}</b> à vista</p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

renderProducts(products);