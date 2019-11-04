import { Component } from "../component";

export class InputComponent extends Component {
    constructor( type, placeholder,value) {
        super();
        
        this.type = type;
        this.placeholder = placeholder; 
        this.value = value;     
    }

    display(div1) {
       
        const name = super.createAppendElement(div1, "input");
        super.setAttribute(name,{             
            type: this.type, 
            placeholder: this.placeholder, 
            value: this.value});
    }
}


