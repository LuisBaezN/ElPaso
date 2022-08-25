'use strict';

/**
 * Tamaño máximo de caracteres en la línea de un producto en el menú.
 */
const TAM = 34;

// ///////////////////////////////// Productos //////////////////////////////////////////////

/**
 * Descripción de las combos
 */
 var combos = [
    {
        nombre: 'Combo 1',
        precio: 50,
        foto: 'hotdog.jpg',
        ingredientes: 'Hot dog, papas y refresco.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Combo 2',
        precio: 60,
        foto: 'hamb.jpg',
        ingredientes: 'Hamburguesa, papas y refresco.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Combo 3',
        precio: 55,
        foto: 'torta.jpg',
        ingredientes: 'Torta, papas y refresco.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

/**
 * Descripción de los alimentos.
 */
var alimentos = [
    {
        nombre: 'Hamburguesa',
        precio: 40,
        foto: 'hamb.jpg',
        ingredientes: 'Carne de res, lechuga, queso, jitomate, mayonesa y mostaza.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Hot dog',
        precio: 20,
        foto: 'hotdog.jpg',
        ingredientes: 'Salchicha de pavo, zanahoria, jitomate, cebolla, mayonesa y mostaza.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Papas a la francesa',
        precio: 15,
        foto: 'fries.jpg',
        ingredientes: 'Papa y sal.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Alitas  ',
        precio: 25,
        foto: 'wings.jpg',
        ingredientes: 'Ala de pollo, ajo y cebolla.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Torta',
        precio: 20,
        foto: 'torta.jpg',
        ingredientes: 'Pechuga de pollo, lechuga, jitomate, cebolla, queso y mayonesa.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Chalupas',
        precio: 10,
        foto: 'chalu.jpg',
        ingredientes: 'Tortilla, salsa, cebolla, carne de pollo deshebrada.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Tostada',
        precio: 15,
        foto: 'tost.jpg',
        ingredientes: 'Tortilla, frijoles, lechuga, carne de pollo deshebrada, quesillo, crema y salsa.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Banderilla  ',
        precio: 12,
        foto: 'bander.jpg',
        ingredientes: 'Salchiha, pan y huevo.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

/**
 * Descripción de las bebidas.
 */
var bebidas = [
    {
        nombre: 'Michelada',
        precio: 70,
        foto: 'mich.jpg',
        ingredientes: 'Cerveza, salsa Maggi, salsa inglesa, Clamato, limón, sal y salsa picante.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Cantarito  ',
        precio: 50,
        foto: 'canta.jpg',
        ingredientes: 'Tequila, jugo de toronja y limón.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Pulque',
        precio: 10,
        foto: 'pulque.jpg',
        ingredientes: 'Bebida fermentada proveniente del maguey.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];


/**
 * Descripoción de los postres
 */
var postres = [
    {
        nombre: 'Ensalada (manzana) ',
        precio: 15,
        foto: 'ensa.jpg',
        ingredientes: 'Manzana, durazno, leche condensada y crema.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Fresas con crema',
        precio: 20,
        foto: 'fresas.jpg',
        ingredientes: 'Fresas, crema.',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

// >>>>>>>>>> Add here the new product!!!!!!!!!!!! 
const comb1 = combos[0].htmlEstruct();
const comb2 = combos[1].htmlEstruct();
const comb3 = combos[2].htmlEstruct();

const com1 = alimentos[0].htmlEstruct();
const com2 = alimentos[1].htmlEstruct();
const com3 = alimentos[2].htmlEstruct();
const com4 = alimentos[3].htmlEstruct();
const com5 = alimentos[4].htmlEstruct();
const com6 = alimentos[5].htmlEstruct();
const com7 = alimentos[6].htmlEstruct();
const com8 = alimentos[7].htmlEstruct();

const beb1 = bebidas[0].htmlEstruct();
const beb2 = bebidas[1].htmlEstruct();
const beb3 = bebidas[2].htmlEstruct();

const pos1 = postres[0].htmlEstruct();
const pos2 = postres[1].htmlEstruct();

////////////////////////////////////// Functions ////////////////////////////////////

/**
 * Crea el formato necesario para mostrar el producto en el menú.
 * @param {string} nombre - Nombre del producto.
 * @param {number} precio - Precio del producto.
 * @returns 
 */
function htmlFormat(nombre, precio){
    let dot = '.';
    precio = '$' + precio.toFixed(2);

    let c = 0;

    for (let i in nombre){
        if (nombre[i] === ' ')
        c++;
    }

    c = c <= 1 ? c = 0 : c;

    let dots = (TAM - (precio.length + nombre.length - c))*2;

    return `<p>${nombre} ${dot.repeat(dots)} ${precio}</p>`
}

/**
 * Desplega los productos y precios del menú en el DOM.
 */
function ini(){
    // >>>>>>>>>> Add here the new product!!!!!!!!!!!! 
    const combo1 = document.getElementById('comb1');
    const combo2 = document.getElementById('comb2');
    const combo3 = document.getElementById('comb3');

    const comida1 = document.getElementById('com1');
    const comida2 = document.getElementById('com2');
    const comida3 = document.getElementById('com3');
    const comida4 = document.getElementById('com4');
    const comida5 = document.getElementById('com5');
    const comida6 = document.getElementById('com6');
    const comida7 = document.getElementById('com7');
    const comida8 = document.getElementById('com8');

    const bebida1 = document.getElementById('beb1');
    const bebida2 = document.getElementById('beb2');
    const bebida3 = document.getElementById('beb3');

    const post1 = document.getElementById('pos1');
    const post2 = document.getElementById('pos2');


    // >>>>>>>>>> Add here the new product!!!!!!!!!!!! 
    combo1.innerHTML = comb1;
    combo2.innerHTML = comb2;
    combo3.innerHTML = comb3;

    comida1.innerHTML = com1;
    comida2.innerHTML = com2;
    comida3.innerHTML = com3;
    comida4.innerHTML = com4;
    comida5.innerHTML = com5;
    comida6.innerHTML = com6;
    comida7.innerHTML = com7;
    comida8.innerHTML = com8;

    bebida1.innerHTML = beb1;
    bebida2.innerHTML = beb2;
    bebida3.innerHTML = beb3;

    post1.innerHTML = pos1;
    post2.innerHTML = pos2;
}

/**
 * Desplega o quita los detalles de algún producto seleccionado, como foto e ingredientes.
 * @param {object} item - Etiqueta que enlaza al producto.
 */
function det(item){
    // >>>>>>>>>> Add here the new product!!!!!!!!!!!! 
    switch (item.innerHTML){
        case com1:
            item.innerHTML += htmlDetails(alimentos[0].nombre, alimentos[0].foto, alimentos[0].ingredientes);
            break;
        case com2:
            item.innerHTML += htmlDetails(alimentos[1].nombre, alimentos[1].foto, alimentos[1].ingredientes);
            break;
        case com3:
            item.innerHTML += htmlDetails(alimentos[2].nombre, alimentos[2].foto, alimentos[2].ingredientes);
            break;
        case com4:
            item.innerHTML += htmlDetails(alimentos[3].nombre, alimentos[3].foto, alimentos[3].ingredientes);
            break;
        case com5:
            item.innerHTML += htmlDetails(alimentos[4].nombre, alimentos[4].foto, alimentos[4].ingredientes);
            break;
        case com6:
            item.innerHTML += htmlDetails(alimentos[5].nombre, alimentos[5].foto, alimentos[5].ingredientes);
            break;
        case com7:
            item.innerHTML += htmlDetails(alimentos[6].nombre, alimentos[6].foto, alimentos[6].ingredientes);
            break;
        case com8:
            item.innerHTML += htmlDetails(alimentos[7].nombre, alimentos[7].foto, alimentos[7].ingredientes);
            break;
        case beb1:
            item.innerHTML += htmlDetails(bebidas[0].nombre, bebidas[0].foto, bebidas[0].ingredientes);
            break;
        case beb2:
            item.innerHTML += htmlDetails(bebidas[1].nombre, bebidas[1].foto, bebidas[1].ingredientes);
            break;
        case beb3:
            item.innerHTML += htmlDetails(bebidas[2].nombre, bebidas[2].foto, bebidas[2].ingredientes);
            break;
        case comb1:
            item.innerHTML += htmlDetails(combos[0].nombre, combos[0].foto, combos[0].ingredientes);
            break;
        case comb2:
            item.innerHTML += htmlDetails(combos[1].nombre, combos[1].foto, combos[1].ingredientes);
            break;
        case comb3:
            item.innerHTML += htmlDetails(combos[1].nombre, combos[1].foto, combos[1].ingredientes);
            break;
        case pos1:
            item.innerHTML += htmlDetails(postres[0].nombre, postres[0].foto, postres[0].ingredientes);
            break;
        case pos2:
            item.innerHTML += htmlDetails(postres[1].nombre, postres[1].foto, postres[1].ingredientes);
            break;
        default:
            item.innerHTML = del(item);
    }
}

/**
 * Da formato necesario para mostrar los detalles del producto en el DOM.
 * @param {string} nom - Nombre del producto. 
 * @param {string} img - Nombre de la imagen a mostrar.
 * @param {string} desc - Ingredientes del producto.
 * @returns 
 */
function htmlDetails(nom, img, desc) {
    return `<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/${img}" alt="${nom}" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="f-desc">${desc}</p></div></div><br>`;
}

/**
 * Borra los detalles del producto en el DOM.
 * @param {object} cont - Etiqueta que enlaza al producto.
 * @returns 
 */
function del(cont){
    let limit = '>';
    let con = 0;
    let inc = 0;

    while (con != 2){
        if (cont.innerHTML[inc] === limit){
            con++;
        }
        inc++;
    }

    return cont.innerHTML.slice(0,inc);
}

////////////////////////////////////// Main ///////////////////////////////////////

console.log('> Running app...');

ini();  