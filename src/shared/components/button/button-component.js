import { Component } from "../component";

export class ButtonComponent extends Component {
    constructor(buttonName, type, value, method) {
        super();
        this.buttonName = buttonName;
        this.type = type;
        this.value = value;
        this.method = method
    }

    display(div1) {
        this.buttonName = super.createAppendElement(div1, "button");
        super.createAppendTextNode(this.buttonName, this.value)
        super.setAttribute(this.buttonName, {
            type: this.type,
            value: this.value,
            method: this.method
        });
    }

    hide(){
        this.buttonName.parentNode.removeChild(this.buttonName);         
    }
}
