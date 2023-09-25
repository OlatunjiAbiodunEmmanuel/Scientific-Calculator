function press(value) {
    document.getElementById("display1").value += value;
}

function cl() {
    var zero = '';
    document.getElementById("display1").value = zero;
    document.getElementById("display").value = zero;
}

function del() {
document.getElementById("display1").value=
document.getElementById("display1").value.slice(0,-1);
}

function logg() {
    // document.getElementById("display1").value = 'Math.log10';
    var ssum = Math.log10;
    var bit = 'log10 of ' + document.getElementById("display1").value + ' is ' + ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
    if (document.getElementById("display1").value == '') {
        document.getElementById("display").value = '';
    }
}

function coss() { 
    // document.getElementById("display1").value = 'Math.cos';
    var ssum = Math.cos;
    var bit = 'cos ' + document.getElementById("display1").value + ' is ' +  ssum(document.getElementById("display1").value * Math.PI/ 180);
    document.getElementById('display').value = bit;
    if (document.getElementById("display1").value == '') {
        document.getElementById("display").value = '';
    }
}

function sinn() {
    // document.getElementById("display1").value = 'Math.sin';
    var ssum = Math.sin;
    var bit =  'sin ' + document.getElementById("display1").value + ' is ' + ssum(document.getElementById("display1").value * Math.PI/ 180);
    document.getElementById('display').value = bit;
    if (document.getElementById("display1").value == '') {
        document.getElementById("display").value = '';
    }
}

function sqt() {
    // document.getElementById("display1").value = 'Math.sqrt';
    var ssum = Math.sqrt;
    var bit = 'sqrt of ' + document.getElementById("display1").value + ' is ' +  ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
    if (document.getElementById("display1").value == '') {
        document.getElementById("display").value = '';
    }
}

function equalls() {
    var inputedvalue = document.getElementById("display1").value;
    var total = eval(inputedvalue);
    document.getElementById("display").value = total;
    if (document.getElementById("display1").value == '') {
        document.getElementById("display").value = '';
    }
}

function toy() {    
    document.getElementById("display1").value = 'Math.log';
}














































































