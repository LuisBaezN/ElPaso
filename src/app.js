'use strict';

////////////////////////////////////// Functions ////////////////////////////////////

/**
 * Crea el formato necesario para mostrar el producto en el menú.
 * @param {string} nombre - Nombre del producto.
 * @param {number} precio - Precio del producto.
 * @returns 
 */
function htmlFormat(nombre, precio){
    precio = '$' + precio.toFixed(2);
    return `<div class="comp-desc"><p>${nombre}</p></div><div class="comp-desc"><p>. . . . . . .</p></div><div class="comp-desc"><p>${precio}</p></div>`
}

/**
 * Desplega los productos y precios del menú en el DOM.
 */
function ini(){
    // >>>>>>>>>> Add here the new product!!!!!!!!!!!!
    let prod = [
        'com1', 'com2', 'com3', 'com4', 'com6', 'com7',
        'beb1', 'beb2', 'beb3', 'beb4',
        'pos1', 'pos2', 'pos3'
    ];

    let limite = prod.length;

    for (let i = 0; i < limite; i++){
        let tagFormat = htmlFormat(productos[prod[i]].nombre,productos[prod[i]].precio);
        let tagDOM = document.getElementById(prod[i]);
        tagDOM.innerHTML = tagFormat;
    }
}

/**
 * 
 * @param {Tag} obj - Etiqueta del producto
 */
function placeDish(obj){
    let ident = obj.id;
    let table = document.getElementById(`table-${ident}`);
    if (table.innerHTML.length === 0){
        table.innerHTML += htmlDetails(productos[ident].nombre, productos[ident].foto, productos[ident].ingredientes);
    } else {
        table.innerHTML = '';
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


////////////////////////////////////// Main ///////////////////////////////////////

console.log('> Running app...');

let productos = fetch('prod.json')
.then(datos => datos.json())
.then(datos => {
    productos = datos;
    ini();
});

setTimeout(function () {
    let cont = document.getElementById('com1');
    placeDish(cont);
}, 3000);