
const barsection = document.querySelector("#datasection");
const rangeinput = document.querySelector("#rangeinput");
const generatebutton = document.querySelector("#Button1");
const buttons = document.querySelectorAll(".buttons");
var bars = [];
var bar_size = [];
var marginsize;

rangeinput.addEventListener("input", update_array_size);
generatebutton.addEventListener("click",generate_array);

function generate_array(){
    barsection.innerHTML = "";

    for(i = 0;i<array_size;i++){
        bar_size[i] = Math.floor(Math.random() * 0.70*(rangeinput.max - rangeinput.min) ) + 10;
        bars[i] = document.createElement("div");
        barsection.appendChild(bars[i]);
        marginsize=0.1;
        bars[i].style=" margin:0% " + marginsize + "%; background-color:rgb(221, 144, 28); width:" + (100/array_size-(2*marginsize)) + "%; height:" + (bar_size[i]) + "%;";
    }
}

function update_array_size(){
    array_size = Number(rangeinput.value);
    generate_array();
}

window.onload = update_array_size();


