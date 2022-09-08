'use strict';

const espera = document.querySelector('.loader');

////////////////////////////////////// Functions ////////////////////////////////////

/**
 * Crea el formato necesario para mostrar el producto en el menú.
 * @param {string} nombre - Nombre del producto.
 * @param {number} precio - Precio del producto.
 * @returns 
 */
function htmlFormat(id, nombre, precio){
    precio = '$' + precio.toFixed(2);
    return `<div class="comp-desc"><p onclick="placeDish(this)" id="${id}">${nombre}</p></div><div class="comp-desc"><p  onclick="placeDish(this)" id="${id}">. . . . . . .</p></div><div class="comp-desc"><p  onclick="placeDish(this)" id="${id}">${precio}</p></div>`
}

/**
 * Desplega los productos y precios del menú en el DOM.
 */
function ini(){
    // >>>>>>>>>> Add here the new product!!!!!!!!!!!!
    let prod = [
        'com1', 'com2', 'com3', 'com4', 'com5', 'com6', 'com7',
        'beb1', 'beb2', 'beb5', 'beb3', 'beb4',
        'pos1', 'pos2', 'pos3'
    ];
    
    let limite = prod.length;
    const postTag = document.querySelectorAll('.tree');
    var li = null;
    var pre = '';
    let cont = 0;

    let limit = postTag.length;
    for (let i = 0; i < limit; i++){
        pre = prod[cont].slice(0,3);
        while(pre === prod[cont].slice(0,3)){
            li = document.createElement('li');
            li.classList.add('prod-desc');
            //li.setAttribute('onclick', 'placeDish(this)');
            //li.id = prod[cont];
            postTag[i].appendChild(li);
            li = document.createElement('li');
            li.id = `table-${prod[cont]}`;
            postTag[i].appendChild(li);
            cont++;
            if (cont === 15)
            break;
        }
    }

    let tagDOM = document.querySelectorAll('.prod-desc');

    for (let i = 0; i < limite; i++){
        let tagFormat = htmlFormat(prod[i], productos[prod[i]].nombre,productos[prod[i]].precio);
        tagDOM[i].innerHTML = tagFormat;
    }
}

/**
 * Desplega los detalles del producto
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

window.addEventListener('load', () => {
    espera.classList.add('hide');
});