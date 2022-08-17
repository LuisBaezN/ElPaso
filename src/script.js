'use strict';

/**
 * Tamaño máximo de caracteres en la línea de un producto en el menú.
 */
const TAM = 33;

// ///////////////////////////////// Productos //////////////////////////////////////////////

var alimentos = [
    {
        nombre: 'Comida 1',
        precio: 112,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Comida 2',
        precio: 7,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

var bebidas = [
    {
        nombre: 'Bebida 1',
        precio: 22.50,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Bebida 2',
        precio: 56.50,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Bebida 3',
        precio: 71,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

var botanas = [
    {
        nombre: 'Botana 1',
        precio: 2.50,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Botana 2',
        precio: 27,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    },
    {
        nombre: 'Botana 32',
        precio: 17,
        foto: 'beb3.jpg',
        ingredientes: 'Aquí van los ingredientes...',
        htmlEstruct: function () {
            return htmlFormat(this.nombre, this.precio);
        }
    }
];

const com1 = alimentos[0].htmlEstruct();
const com2 = alimentos[1].htmlEstruct();

const beb1 = bebidas[0].htmlEstruct();
const beb2 = bebidas[1].htmlEstruct();
const beb3 = bebidas[2].htmlEstruct();

const bot1 = botanas[0].htmlEstruct();
const bot2 = botanas[1].htmlEstruct();
const bot3 = botanas[2].htmlEstruct();

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
    let dots = (TAM - (precio.length + nombre.length))*2;

    return `<p>${nombre} ${dot.repeat(dots)} ${precio}</p>`
}

/**
 * Desplega los productos y precios del menú en el DOM.
 */
function ini(){
    const comida1 = document.getElementById('com1');
    const comida2 = document.getElementById('com2');

    const bebida1 = document.getElementById('beb1');
    const bebida2 = document.getElementById('beb2');
    const bebida3 = document.getElementById('beb3');

    const botana1 = document.getElementById('bot1');
    const botana2 = document.getElementById('bot2');
    const botana3 = document.getElementById('bot3');


    comida1.innerHTML = com1;
    comida2.innerHTML = com2;

    bebida1.innerHTML = beb1;
    bebida2.innerHTML = beb2;
    bebida3.innerHTML = beb3;

    botana1.innerHTML = bot1;
    botana2.innerHTML = bot2;
    botana3.innerHTML = bot3;
}

/**
 * Desplega o quita los detalles de algún producto seleccionado, como foto e ingredientes.
 * @param {object} item - Etiqueta que enlaza al producto.
 */
function det(item){

    switch (item.innerHTML){
        case com1:
            item.innerHTML += htmlDetails(alimentos[0].nombre, alimentos[0].foto, alimentos[0].ingredientes);
            break;
        case com2:
            item.innerHTML += htmlDetails(alimentos[1].nombre, alimentos[1].foto, alimentos[1].ingredientes);
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
        case bot1:
            item.innerHTML += htmlDetails(botanas[0].nombre, botanas[0].foto, botanas[0].ingredientes);
            break;
        case bot2:
            item.innerHTML += htmlDetails(botanas[1].nombre, botanas[1].foto, botanas[1].ingredientes);
            break;
        case bot3:
            item.innerHTML += htmlDetails(botanas[1].nombre, botanas[1].foto, botanas[1].ingredientes);
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