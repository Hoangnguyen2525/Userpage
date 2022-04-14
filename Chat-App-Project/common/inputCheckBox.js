class inputCheckBox {
    container = document.createElement('div');
    input = document.createElement('input');

    constructor(inputType, name, inputValue, id) {
        this.input.type = inputType;
        this.input.name = name;
        this.input.value = inputValue;
        this.input.id = id;

        this.container.appendChild(this.input);
    }
}

export {inputCheckBox}