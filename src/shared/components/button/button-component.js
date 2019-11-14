import { Component } from "../component";

export class ButtonComponent extends Component {
    constructor(buttonName, type, value, method) {
        super();
        this.buttonName = buttonName;
        this.type = type;
        this.value = value;
        this.method = method;
        this.container = null;
    }

    display(div1) {
        this.container = document.createElement("wod-button");
        this.buttonName = super.createAppendElement(this.container, "button");
        super.createAppendTextNode(this.buttonName, this.value)
        super.setAttribute(this.buttonName, {
            type: this.type,
            value: this.value,
            method: this.method
        });
        this.container.appendChild(this.buttonName);
        div1.appendChild(this.container);
    }

    hide(){
        this.container.parentNode.removeChild(this.container);        
    }
}
