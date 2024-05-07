

function main() {
  let current = "";
  const touchpad = document.querySelector(".touchpad");

  //add event listener to touchpad for button presses 
  touchpad.addEventListener("click", handleInput);

  function handleInput(event) {

    if (event.target.tagName.toLowerCase() !== 'button'){
        return 
    }
    const output = document.getElementById("output");
    const inputValue = event.target.textContent;
    current = current + inputValue;

    output.innerHTML = current;

    if(event.target.textContent == "="){
        output.innerHTML = "";
        current = current.slice(0, -1);
        current = eval(current);
        output.innerHTML = current;
        return;
    }else if(event.target.textContent.trim().toUpperCase() == "AC"){
        current = "";
        output.innerHTML = current;
        console.log("cleared");
    }
  }
}

main();