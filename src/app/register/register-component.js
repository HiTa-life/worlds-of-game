import { Component } from "../../shared/components/component";
import { BrandTitle } from "../../shared/components/brand/brand-title";
import { UserService } from "../../shared/services/user.service";
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { ButtonComponent } from "../../shared/components/button/button-component";
import { AlertComponent } from "../../shared/components/alert/alert-component";
import { Router } from "../../shared/router/router";
import { UserLocalService } from "../../shared/services/UserLocalService/user-local-service";

export class RegisterComponent extends Component {
    constructor(form, radioButtonMister, radioButtonMiss, gender, surname, firstName, lastName, email, phone, adress, city, zip, password) {
        super();
        this.titleRegister = new BrandTitle("Worlds of Game");
        this.radioButtonMister = radioButtonMister;
        this.radioButtonMiss = radioButtonMiss;
        this.gender = gender;
        this.surname = surname;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.zip = zip;
        this.password = password;
        this.form = null;
        this.loadingComponent = new LoadingComponent();
        this.alert = new AlertComponent();
        this.element =  null;
        this.form = null;
        
    }

    display(parent) {
        this.form = document.createElement("form");
        this.element = document.createElement("wog-register-component");
        this.element.appendChild(this.form);
        this.titleRegister.display(this.form);
     

        this.radioButtonMister = super.createAppendElement(this.form, "input");
        super.setAttribute(this.radioButtonMister, {
            type: "radio",
            name: "civilité",
            value: "monsieur",

        });
        const labelMister = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelMister, "monsieur");

        this.radioButtonMiss = super.createAppendElement(this.form, "input");
        super.setAttribute(this.radioButtonMiss, {
            type: "radio",
            name: "civilité",
            value: "madame"
        });
        const labelMiss = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelMiss, "madame" + " ");

        const labelSurname = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelSurname, " " + "surname");

        this.surname = super.createAppendElement(this.form, "input");
        super.setAttribute(this.surname, {
            type: "text",
            placeholder: "surname",
            value: ""
        })
        const labelFirst = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelFirst, "firstname");
        this.firstName = super.createAppendElement(this.form, "input");
        super.setAttribute(this.firstName, {
            type: "text",
            placeholder: "firstname",
            value: ""
        })
        const labelLastName = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelLastName, "lastname");

        this.lastName = super.createAppendElement(this.form, "input");
        super.setAttribute(this.lastName, {
            type: "text",
            placeholder: "lastname",
            value: ""
        })
        const labelMail = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelMail, "mail");

        this.email = super.createAppendElement(this.form, "input");
        super.setAttribute(this.email, {
            type: "mail",
            value: "test@example.com"
        })
        const labelNumber = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelNumber, "phone number");
        this.phone = super.createAppendElement(this.form, "input");
        super.setAttribute(this.phone, {
            type: "number",
            placeholder: "0669856321",
            value: ""
        })
        const labelAddress = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelAddress, "address");
        this.adress = super.createAppendElement(this.form, "input");
        super.setAttribute(this.adress, {
            type: "text",
            placeholder: "chemin de l'arbre vert",
            value: ""
        })
        const labelCity = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelCity, "city");
        this.city = super.createAppendElement(this.form, "input");
        super.setAttribute(this.city, {
            type: "text",
            placeholder: "Poudlard",
            value: ""
        })
        const labelZipCode = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelZipCode, "zip code");
        this.zip = super.createAppendElement(this.form, "input");
        super.setAttribute(this.zip, {
            type: "text",
            placeholder: "",
            value: ""
        })
        const labelPassword = super.createAppendElement(this.form, "label");
        super.createAppendTextNode(labelPassword, "password");
        this.password = super.createAppendElement(this.form, "input");
        super.setAttribute(this.password, {
            type: "password",
            value: ""
        })
        this.buttonClear =  new ButtonComponent("ButtonClear","submit","Clear","submit")
        this.buttonClear.display(this.form)       

        this.buttonSave = new ButtonComponent("buttonSave", "submit", "Create Account", "post");
        this.buttonSave.display(this.form);

        this.buttonSave.buttonName.addEventListener("click", (event) => { this.clickButton(event); });        
        document.body.appendChild(this.element);
    }
     hide() {
        this.element.parentNode.removeChild(this.element);
    }
    clickButton(event) {
        event.preventDefault();
        // if (radioButtonMister.checked === true){
        //     user.gender = this.radioButtonMister.value;
        // }
        // else {
        //     user.gender = this.radioButtonMiss.value;
        // }
        //  window.history.pushState(
        //      {},
        //      "home",
        //      "/home"
        //  )

        const user = UserService.get();
        user.surname = this.surname.value;
        user.firstName = this.firstName.value;
        user.lastName = this.lastName.value;
        user.email = this.email.value;
        user.phone = this.phone.value;
        user.adress = this.adress.value;
        user.city = this.city.value;
        user.zip = this.zip.value;
        user.password = this.password.value;
        console.log(user);

        this.postStart();
        UserService
            .post()
            .then((data) => {
                this.postSuccess(data);
                this.postEnd();
            })
            .catch((xhr) => {
                this.postError(xhr.status);
                this.postEnd();
            });
    }

    postStart() {
        console.log("start");
        if(this.alert.element
             && this.alert.element.parentNode){
            this.alert.hide();
        }
        this.loadingComponent.display(this.buttonSave.buttonName.parentNode);
        this.buttonSave.buttonName.parentNode.removeChild(this.buttonSave.buttonName);    
    };

    postEnd() {        
        this.loadingComponent.hide();
        this.buttonSave = new ButtonComponent("buttonSave", "submit", "Create Account", "post");
        this.buttonSave.display(this.form);
        this.buttonSave.buttonName.addEventListener("click", (event) => { this.clickButton(event); });

        console.log("end");
    };

    postSuccess(user) {
        UserLocalService.post();
        Router.navigate("login");
        // if(200 === xhr.status || 201 === xhr.status){
        //     data.post(JSON.stringify(user))
        // }   
        //redirection page login avec history 
        
        console.log("success");

    };
    postError(status) {
        // this.alert = 409 === status ? "Account already exist" : 412 === status ? "Bad model" :
        // 500 === status ? "Service unvailable" : 0 === status ? 

        if(409 === status){
            this.alert.text = "Account already exist";
           
        }else if(412 === status){
            this.alert.text = "Bad model";
            
        }
        else if(500 === status){
            this.alert.text = "Service unvailable"
            
        }
        else if(0 === status){
            this.alert.text = "network Error"
           
        }       
        this.alert.display(this.form)
        console.log("error");
    };
   
}

