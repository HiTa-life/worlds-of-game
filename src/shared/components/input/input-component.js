import { Component } from "../component";

export class InputComponent extends Component {
    constructor(id, type, placeholder,value) {
        super();
        this.id = id;
        this.type = type;
        this.placeholder = placeholder; 
        this.value = value;     
    }

    display(div1) {
       
        const name = super.createAppendElement(div1, "input");
        super.setAttribute(name,{ 
            id: this.id, 
            type: this.type, 
            placeholder: this.placeholder, 
            value: this.value});
    }
}


