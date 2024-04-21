
export default class Input {
    constructor(){
        this.current = "";
        this.touchpad = document.querySelector(".touchpad");
        this.touchpad.addEventListener("click", (event) => this.handleInput(event));
    }

    handleInput(event) {
        if (event.target.tagName != 'BUTTON'){
            return;
        }
        const inputValue = event.target.textContent;
        this.current = this.current + inputValue;
    }

    getInputString(){
        return this.current; 
    }
}

