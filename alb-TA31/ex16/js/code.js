function extraerH(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    min = validar(min);
    seg = validar(seg);
    document.getElementById("h").innerHTML = horas;
    document.getElementById("min").innerHTML = min;
    document.getElementById("seg").innerHTML = seg;
}

function validar(tiempo){
    if(tiempo<10){
        tiempo = "0"+tiempo;
    }
    return tiempo;
}