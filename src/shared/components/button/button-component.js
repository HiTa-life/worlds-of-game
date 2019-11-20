import { Component } from "../component";

export class ButtonComponent extends Component {
    constructor(buttonName, type, value, method) {
        super();
        this.buttonName = buttonName;
        this.type = type;
        this.value = value;
        this.method = method;
        this.container = null;
        this.element = null;
    }

    display(div1) {
        this.element = document.createElement("wod-button");
        this.buttonName = super.createAppendElement(this.element, "button");
        super.createAppendTextNode(this.buttonName, this.value)
        super.setAttribute(this.buttonName, {
            type: this.type,
            value: this.value,
            method: this.method
        });
        this.element.appendChild(this.buttonName);
        div1.appendChild(this.element);
    }

    hide(){
        this.element.parentNode.removeChild(this.element);        
    }
}
