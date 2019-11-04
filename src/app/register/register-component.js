import { Component } from "../../shared/components/component";
import { BrandTitle } from "../../shared/components/brand/brand-title";
import { User } from "../../shared/models/user/user.model";
import { InputComponent } from "../../shared/components/input/input-component";



export class RegisterComponent extends Component {
    constructor(user,surname, firstName, lastName, mail, phone, address, city, zipCode) {
        super();
        this.titleRegister = new BrandTitle("Worlds of Game");
        this.user = new User();
        this.surname = surname;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.passwordRegister = this.passwordRegister;

    }

    display() {

        const div1 = document.createElement("div");
        const div2 = super.createAppendElement(div1, "div");
        const div3 = super.createAppendElement(div2, "div");
        this.titleRegister.display(div3);
        const form = super.createAppendElement(div3, "form");
        // const user = new User();
        const radioButtonMister = super.createAppendElement(form, "input");
        super.setAttribute(radioButtonMister, {
            type: "radio",           
            name: "civilité",
            value: "monsieur",
           
        });
        const labelMister = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelMister, "monsieur");

        const radioButtonMiss = super.createAppendElement(form, "input");
        super.setAttribute(radioButtonMiss, {
            type: "radio",
            name: "civilité",
            value: "madame"
        });
        const labelMiss = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelMiss, "madame" + " ");

        const labelSurname = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelSurname, " " + "surname");

        this.surname = super.createAppendElement(form, "input");
        super.setAttribute(this.surname, {
            type: "text",
            placeholder: "surname",
            value :" "
        })
        const labelFirst = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelFirst, "firstname");
        this.firstName = super.createAppendElement(form, "input");
        super.setAttribute(this.firstName, {
            type: "text",
            placeholder: "firstname",
            value :" "
        })
        const labelLastName = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelLastName, "lastname");

        this.lastName = super.createAppendElement(form, "input");
        super.setAttribute(this.lastName, {
            type: "text",
            placeholder: "lastname",
            value :" "
        })
        const labelMail = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelMail, "mail");

        this.mail = super.createAppendElement(form, "input");
        super.setAttribute(this.mail, {
            type: "mail",
            value: "test@example.com"
        })
        const labelNumber = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelNumber, "phone number");
        this.phone = super.createAppendElement(form, "input");
        super.setAttribute(this.phone, {
            type: "number",
            placeholder: "0669856321",
            value :""
        })
        const labelAddress = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelAddress, "address");
        this.address = super.createAppendElement(form, "input");
        super.setAttribute(this.address, {
            type: "text",
            placeholder: "chemin de l'arbre vert",
            value :""
        })
        const labelCity = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelCity, "city");
        this.city = super.createAppendElement(form, "input");
        super.setAttribute(this.city, {
            type: "text",
            placeholder: "Poudlard",
            value :""
        })
        const labelZipCode = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelZipCode, "zip code");
        this.zipCode = super.createAppendElement(form, "input");
        super.setAttribute(this.zipCode, {
            type: "number",
            placeholder: "36 987",
            value:""
        })
        const labelPassword = super.createAppendElement(form, "label");
        super.createAppendTextNode(labelPassword, "password");
        this.passwordRegister = super.createAppendElement(form, "input");
        super.setAttribute(this.passwordRegister, {
            type: "password",
            value: ""
        })

        const buttonClear = super.createAppendElement(form, "button");
        super.setAttribute(buttonClear, {
            type: "submit",
            value: "clear",
            method: "submit"
        });
        const buttonSave = super.createAppendElement(form, "button");
        super.setAttribute(buttonSave, {
            type: "submit",
            value: "save",
            method: "post"

        });
        buttonSave.addEventListener("click", (event) => { this.clickButton(event); });
        const clearText = super.createAppendTextNode(buttonClear, "clear");
        const saveText = super.createAppendTextNode(buttonSave, "Create account");
        document.body.appendChild(div1);

    }
    clickButton(event) {
        event.preventDefault();
        //this.user =  new User();

        this.user.surname = this.surname.value;
        this.user.firstName = this.firstName.value;
        this.user.lastName = this.lastName.value;
        this.user.mail = this.mail.value;
        this.user.phone = this.phone.value;
        this.user.address = this.address.value;
        this.user.city = this.city.value;
        this.user.zipCode = this.zipCode.value;
        this.user.passwordRegister = this.passwordRegister.value;
        console.log(this.user);
    }
}

