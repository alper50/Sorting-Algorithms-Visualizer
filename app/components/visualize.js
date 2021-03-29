var speedrange = document.querySelector("#speed");
speedrange.addEventListener("input",getspeed);

var speed=1000;

function getspeed(){
    var speed_array = speedrange.value;

    switch(parseInt(speed_array))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(array_size/10)*speed);
}

var delay_time=10000/(Math.floor(array_size/10)*speed);  
var c_delay=0;

function updatediv(cont,height,color){
    window.setTimeout(function(){
        cont.style=" margin:0% " + marginsize + "%; width:" + (100/array_size-(2*marginsize)) + "%; height:" + height + "%; background-color:" + color + ";" +"border-radius: 20px;";
    },c_delay+=delay_time);
}