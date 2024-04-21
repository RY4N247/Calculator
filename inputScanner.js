function myAdd(n1, n2) {
    return n1 + n2;
  }
  
  function mySubtract(n1, n2) {
    return n1 - n2;
  }
  
  function myMultiply(n1, n2) {
    return n1 * n2;
  }
  
  function myDivide(n1, n2) {
    if (n2 === 0) {
        return "Error: Division by zero";
    }
    return n1 / n2;
  }
  
  
  function getSting() {
    
    let current = "";
    const touchpad = document.querySelector(".touchpad");
  
    //add event listener to touchpad for button presses 
    touchpad.addEventListener("click", handleInput);
  
    function handleInput(event) {
      if (event.target.tagName != 'BUTTON'){
        return;
      }
      const output = document.getElementById("output");
      const inputValue = event.target.textContent;
      //
      current = current + inputValue;

      return current; 
  
      //output.innerHTML = current;
    }
  }
  
 // getSting();