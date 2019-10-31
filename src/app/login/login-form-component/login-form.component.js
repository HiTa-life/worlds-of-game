import { Component } from "../../../shared/components/component";
import { InputComponent } from "../../../shared/components/input/input-component";

export class LoginFormComponent extends Component {

    constructor(textLogin) {
        super();
        this.textLogin = textLogin;
        this.buttonGoLink;
    }

    display(div1, user) {
        const form = super.createAppendElement(div1, "form");
        this.buttonGoLink = super.createAppendElement(form, "a");
        const inputLogin = new InputComponent(
         "inputLogin",        
         "text",  "Email", 
         user.nameUser.surName);
        const inputPassword = new InputComponent(
             "inputPassword",
            "text", 
             "Password",
             user.password);
        const buttonGo = super.createAppendElement(this.buttonGoLink, "button");
        const loginText = super.createAppendTextNode(buttonGo, this.textLogin);
        inputLogin.display(div1);
        inputPassword.display(div1);
        super.setAttribute(form, {
            class: "form",
            method: "post",
            action: ""
        });
        // super.setAttribute(inputLogin, { id: "inputLogin", type: "text", placeholder: "Email", value: user.nameUser.surName, action: "" });
        // super.setAttribute(inputPassword, { id: "inputPassword", type: "text", placeholder: "Password", value: user.password });
         super.setAttribute(buttonGo, { text: "Go", type: "submit", href: "https://fr.wikipedia.org" });
    }

}
