//
// ------------Calculator-----------

var calInput = document.getElementById("cal-input");

var last = calInput.value.lenght -1;
if(calInput.value[last] ==="+" || calInput.value[last] ==="-" || calInput.value[last] ==="*" || calInput.value[last] ==="/" ){
    document.getElementById("multi").setAttribute("disabled","disabled");
    document.getElementById("plus").setAttribute("disabled","disabled");
    document.getElementById("sub").setAttribute("disabled","disabled");
    document.getElementById("div").setAttribute("disabled","disabled");

}else{
    document.getElementById("multi").removeAttribute("disabled","disabled");
    document.getElementById("plus").removeAttribute("disabled","disabled");
    document.getElementById("sub").removeAttribute("disabled","disabled");
    document.getElementById("div").removeAttribute("disabled","disabled");

}

function insertValue(val) {
    calInput.value += val
}


function clearValue() {
    calInput.value = ""
}


function showResult() {
    calInput.value = eval(calInput.value)
}