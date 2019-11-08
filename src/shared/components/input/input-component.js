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

    display() {
        this.div1 = document.createElement("wod-input");
        this.name = super.createAppendElement(this.div1, "input");
        super.setAttribute(this.name, {
            type: this.type,
            placeholder: this.placeholder,
            value: this.value
        });

        this.div1.appendChild(this.name);
        document.body.appendChild(this.div1);
    }
}


