import { Component } from "../component";

export class InputComponent extends Component {
    constructor(type, placeholder, value) {
        super();

        this.type = type;
        this.placeholder = placeholder;
        this.value = value;
        this.element = null;
        this.name;
    }

    display(div1) {
        this.element= document.createElement("wod-input");
        this.name = super.createAppendElement(this.element, "input");
        super.setAttribute(this.name, {
            type: this.type,
            placeholder: this.placeholder,
            value: this.value
        });

       this.element.appendChild(this.name);
        div1.appendChild(this.element);
    }
    hide() {
       this.element.parentNode.removeChild(this.element);
    }
}


