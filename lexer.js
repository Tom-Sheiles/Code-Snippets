export default class Lexer{
    #input = '';
    #index = 0;
    constructor(input)
    {
        this.#input = input;
        this.#index = 0;
    }
    
    pop() { return this.#input[this.#index++]; }
    peek() { return this.#input[this.#index]; }
    seek(index) {this.#index = 0}
    getIndex() {return this.#index}
    length() {return this.#input.length}
    isEmpty() { return this.#index >= (this.#input.length) }
}