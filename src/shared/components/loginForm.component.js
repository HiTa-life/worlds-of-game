import { Components } from "./super-component";
import { User } from "../models/user.model";

export class LoginForm extends Components {

    constructor(div1,user) {
       
        super();             
        const form = super.createAppendElement(div1,"form");      
        const inputLogin = super.createAppendElement(form,"input");      
        const inputPassword = super.createAppendElement(form,"input");
        this.buttonGoLink = super.createAppendElement(form,"a");
        const buttonGo = super.createAppendElement(this.buttonGoLink,"button");
             this.loginText = super.createAppendTextNode(buttonGo,"Login");
        
        
        super.setAttribute(form, {
            class: "form",
            method: "post",
            action: ""
        });
        super.setAttribute(inputLogin, {
            id: "inputLogin",
            type: "text",
            placeholder: "Email",
            value: user.nameUser.surName,
            action: ""
        });
        super.setAttribute(inputPassword,
            {
                id: "inputPassword",
                type: "text",
                placeholder: "Password",
                value: user.password
            });
        super.setAttribute(buttonGo, {
            text: "Go",
            type: "submit",
            href: "https://fr.wikipedia.org"            
        });
        
        // form.appendChild(inputLogin);
        // form.appendChild(inputPassword);
        // form.appendChild(this.buttonGoLink);
        // buttonGo.appendChild(this.loginText);
        // this.buttonGoLink.appendChild(buttonGo);
        // div1.appendChild(form);
    };
}
