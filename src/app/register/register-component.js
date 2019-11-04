import { Component } from "../../shared/components/component";
import { BrandTitle } from "../../shared/components/brand/brand-title";
import { User } from "../../shared/models/user/user.model";
import { InputComponent } from "../../shared/components/input/input-component";



export class RegisterComponent extends Component {
    constructor() {
        super();
     this.titleRegister = new BrandTitle("Worlds of Game");     
    }

    display() {

        const div1 = document.createElement("div");
        const div2 = super.createAppendElement(div1, "div");
        const div3 = super.createAppendElement(div2, "div");
        this.titleRegister.display(div3);            
        const form = super.createAppendElement(div3, "form");
        const user = new User();
        const radioButtonMister = super.createAppendElement(form, "input");
        super.setAttribute(radioButtonMister, {
            type: "radio",
            id: "monsieur",
            name: "civilité",
            value: "monsieur",
            label: "mister"
        });
        const labelMister = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelMister, "monsieur");

        const radioButtonMiss = super.createAppendElement(form, "input");
        super.setAttribute(radioButtonMiss, {
            type: "radio",
            name: "civilité",
            value: "madame"
        });
        const labelMiss = super.createAppendElement(form , "label");
        super.createAppendTextNode(labelMiss, "madame" + " ");

        const labelSurname = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelSurname, " " + "surname");
        const surname = super.createAppendElement(form, "input");
        super.setAttribute(surname, {
            type: "text",
            placeholder: "surname"
        })
        const labelFirst = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelFirst, "firstname");
        const firstName = super.createAppendElement(form, "input");
        super.setAttribute(firstName, {
            type: "text",
            placeholder: "firstname"
        })
        const labelLastName = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelLastName, "lastname");

        const lastName = super.createAppendElement(form, "input");
        super.setAttribute(lastName, {
            type: "text",
            placeholder: "lastname"
        })
        const labelMail = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelMail, "mail");

        const mail = super.createAppendElement(form, "input");
        super.setAttribute(mail, {
            type: "mail",
            value: user.mailUser = "test@example.com"
        })
        const labelNumber = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelNumber, "phone number");
        const phone = super.createAppendElement(form, "input");
        super.setAttribute(phone, {
            type: "number",
            placeholder: "0669856321"
        })
        const labelAddress = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelAddress, "address");
        const address = super.createAppendElement(form, "input");
        super.setAttribute(address, {
            type: "text",
            placeholder: "chemin de l'arbre vert"
        })
        const labelCity = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelCity, "city");
        const city = super.createAppendElement(form, "input");
        super.setAttribute(city, {
            type: "text",
            placeholder: "Poudlard"
        })
        const labelZipCode = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelZipCode, "zip code");
        const zipCode = super.createAppendElement(form, "input");
        super.setAttribute(zipCode, {
            type: "number",
            placeholder: "36 987"
        })
        const labelPassword = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelPassword, "password");
        const passwordRegister = super.createAppendElement(form, "input");
        super.setAttribute(passwordRegister, {
            type: "number",
            value: user.password,
        })

        const buttonClear = super.createAppendElement(form, "button");
        super.setAttribute(buttonClear, {
            type: "submit",
            value: "clear",
            method:"submit"
        });
        const buttonSave = super.createAppendElement(form, "button");
        super.setAttribute(buttonSave, {
            type: "submit",
            value: "save",
            method:"post"

        });
        buttonSave.addEventListener("click",(event) => { this.clickButton(event); });
        const clearText = super.createAppendTextNode(buttonClear, "clear");
        const saveText = super.createAppendTextNode(buttonSave, "Create account");
        document.body.appendChild(div1);              
                
    }
    clickButton(event) {
       event.preventDefault();

        console.log("hello");
    }   
}

