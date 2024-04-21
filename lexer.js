import Input from './input.js';
export default class lexer {
    
    #stream = "";
    #cursor = 0; 
    #input = new Input().getInputString;

    at(){
        return this.#stream[this.#cursor];
    }

    tokenize(input = this.#input ) {
        this.#stream = input;
        this.#cursor = 0;

        //iterate over tokens- ie every character 
        while (this.#cursor < this.#stream.length){
            
        }
    }
}