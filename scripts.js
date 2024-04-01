const list = document.querySelector('ul');
const buttons = document.querySelectorAll('.container-buttons button');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const filterVegan = document.querySelector('.filter-vegan');

function formatCurrency(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

function showAll(productsArray) {
    let myLi = '';

    productsArray.forEach(product => {
        myLi +=
            `<li>
             <img src=${product.src}>
             <p>${product.name}</p>
             <p class="item-price">${formatCurrency(product.price)}</p>            
         </li>`;
    });

    list.innerHTML = myLi;
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));

    showAll(newPrices);
}

function sumAllitens() {
    const totalvalue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

    list.innerHTML = `
    <li>
        <p>O valor total dos itens é ${formatCurrency(totalvalue)}</p>            
    </li>`;
}

function filterVeganItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan);
    showAll(filterJustVegan);
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItens);
sumAll.addEventListener('click', sumAllitens);
filterVegan.addEventListener('click', filterVeganItens);

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.container-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
             if (window.innerWidth <= 768) {
               window.scrollTo({ top: 0, behavior: 'smooth' });
                const containerButtons = document.querySelector('.container-buttons');
                containerButtons.classList.add('clicked');
            }
        });
    });
});
