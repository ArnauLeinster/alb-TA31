function setInput(value) {
    document.getElementById('input').value = value;
}

function getInput() {
    return(document.getElementById('input').value);
}

function add(key) { 
    let result = getInput();
    if (result!='0' || isNaN(key)) setInput(result + key);
    else setInput(key);
}

function calc() {
    let result = eval(getInput()); 
    setInput(result);
}

function del() { 
    setInput(0);
}

function eliminar(){
    let result = getInput();
    result = result.substring(0,result.length-1);
    setInput(result);
}