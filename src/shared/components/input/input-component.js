import { Component } from "../component";

export class InputComponent extends Component {
    constructor(type, placeholder, value) {
        super();

        this.type = type;
        this.placeholder = placeholder;
        this.value = value;
        this.div1;
        this.name;
    }

    display(div1) {
        this.container= document.createElement("wod-input");
        this.name = super.createAppendElement(this.container, "input");
        super.setAttribute(this.name, {
            type: this.type,
            placeholder: this.placeholder,
            value: this.value
        });

        this.container.appendChild(this.name);
        div1.appendChild(this.container);
    }
    hide() {
        this.container.parentNode.removeChild(this.container);
    }
}


