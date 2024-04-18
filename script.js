function myAdd(n1, n2) {
    return n1 + n2;
}

function mySubtract(n1, n2) {
    return n1 - n2;
}

function myMultiply(n1 ,n2) {
    return n1 * n2;
}

function myDivide(n1, n2) {
    return n1 / n2;
}


let current= ""; 


const buttons = document.querySelectorAll('.button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    //console.log(button.textContent);
    //document.getElementById("output").innerHTML = button.textContent;
    current = current + button.textContent;
    document.getElementById("output").innerHTML = current;
    console.log(current);
  });
});

function operations(current){
    

}


