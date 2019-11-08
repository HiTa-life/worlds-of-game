import { Component } from "../component";

export class ButtonComponent extends Component {
    constructor(buttonName, type, value, method) {
        super();
        this.buttonName = buttonName;
        this.type = type;
        this.value = value;
        this.method = method;
        this.div1 = null;
    }

    display() {
        this.div1 = document.createElement("wod-button");
        this.buttonName = super.createAppendElement(this.div1, "button");
        super.createAppendTextNode(this.buttonName, this.value)
        super.setAttribute(this.buttonName, {
            type: this.type,
            value: this.value,
            method: this.method
        });
        this.div1.appendChild(this.buttonName);
        document.body.appendChild(this.div1);
    }

    hide(){
        this.buttonName.parentNode.removeChild(this.buttonName);         
    }
}
