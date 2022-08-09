'use strict';

// ///////////////////////////////// Descripción //////////////////////////////////////////////

////////////////////////// Comida ///////////////////////////////////
const com1 = '<p>Comida 1 ......................................... $12</p>';
const com2 = '<p>Comida 2 ......................................... $121</p>';

////////////////////////// Bebidas ///////////////////////////////////

const beb1 = '<p>Bebida 1 ......................................... $22</p>';
const beb2 = '<p>Bebida 2 ......................................... $2</p>';
const beb3 = '<p>Bebida 3 ......................................... $71</p>';

////////////////////////// Botana ///////////////////////////////////
const bot1 = '<p>Botana 1 ......................................... $22</p>';
const bot2 = '<p>Botana 2 ......................................... $2</p>';
const bot3 = '<p>Botana 3 ......................................... $71</p>';

////////////////////////////////////// Functions ////////////////////////////////////

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

function det(item){

    switch (item.innerHTML){
        case com1:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case com2:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case beb1:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case beb2:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case beb3:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case bot1:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case bot2:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        case bot3:
            item.innerHTML += '<div class="dpc-desc"><div class="dpc-dbox"><img src="assets/beb3.jpg" alt="Bebida 3" style="border-radius: 100px; width: 130px;"></div><div class="dpc-dbox"><p class="desc">Estos son sus ingredientes</p></div></div><br>';
            break;
        default:
            item.innerHTML = del(item);
    }
}

function del(cont){
    let limit = '>';
    let con = 0;
    for (let i = 0; i <= 70; i++){
        if (cont.innerHTML[i] === limit){
            con++;
            if (con === 2){
                return cont.innerHTML.slice(0,i+1)
            }
        }
    }
}

////////////////////////////////////// Main ///////////////////////////////////////

console.log('running...');

ini();