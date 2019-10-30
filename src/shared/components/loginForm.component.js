import { Components } from "./super-component";
import { User } from "../models/user.model";

export class LoginForm extends Components {

    constructor(div1) {
        super();
        const user = new User();
        user.nameUser.surName = "john";
        user.password = "blabla";
        const form = document.createElement("form");
        const inputLogin = document.createElement("input");
        const inputPassword = document.createElement("input");
        const buttonGo = document.createElement("button");
        this.loginText = document.createTextNode("Login");
        this.buttonGoLink = document.createElement("a");
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
        form.appendChild(inputLogin);
        form.appendChild(inputPassword);
        form.appendChild(this.buttonGoLink);
        buttonGo.appendChild(this.loginText);
        this.buttonGoLink.appendChild(buttonGo);
        div1.appendChild(form);
    };
}
