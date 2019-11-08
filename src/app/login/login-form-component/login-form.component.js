import { Component } from "../../../shared/components/component";
import { InputComponent } from "../../../shared/components/input/input-component";
import { UserService } from "../../../shared/services/user.service";
import { ButtonComponent } from "../../../shared/components/button/button-component";
import { Router } from "../../../shared/router/router";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { BrandTitle } from "../../../shared/components/brand/brand-title";
import { AlertComponent } from "../../../shared/components/alert/alert-component";


export class LoginFormComponent extends Component {

    constructor() {
        super();
        this.textLogin;
        this.inputLogin;
        this.inputPassword;
        this.loadingComponent = new LoadingComponent();
       this.alert = new AlertComponent();
    }

    display() {
        this.div1 = document.createElement("div");       
        this.form = super.createAppendElement(this.div1, "form");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        this.titleComponent = new BrandTitle("Worlds of Game","assets/images/logo-color.png");
        this.titleComponent.display(this.div1)
        this.labelEmail = document.createElement("label");
        this.labelEmailText = document.createTextNode("login");
        this.labelEmail.appendChild(this.labelEmailText);
        this.labelPassword = document.createElement("label");
        this.labelPasswordText = document.createTextNode("password");
        this.labelPassword.appendChild(this.labelPasswordText);
        div2.appendChild(this.labelEmail);
        div3.appendChild(this.labelPassword);
        this.div1.appendChild(div2);
        this.div1.appendChild(div3);
        this.div1.appendChild(this.form)
        
        this.inputLogin = new InputComponent(
            "email",
            "Email",
            ""
        );
     
        this.inputPassword = new InputComponent(
            "password",
            "password",
            ""
        );
       

        this.inputLogin.display(this.div1);
        this.inputPassword.display(this.div1);
        super.setAttribute(this.form, {
            class: "form",
            method: "post",
            action: ""
        });

        this.buttonLogin = new ButtonComponent("Login", "submit", "Login", "post");
        this.buttonLogin.display(this.div1);
        this.buttonLogin.buttonName.addEventListener("click", (event) => { this.clickButtonLogin(event); });
        document.body.appendChild(this.div1);
    }


    clickButtonLogin(event) {
        event.preventDefault();
        const user = UserService.get();
        user.email = this.inputLogin.value;
        user.password = this.inputPassword.value;
        this.loginStart()
        UserService.login()
            .then((data) => {
                this.loginSuccess(data);
                this.loginEnd();
            })
            .catch((xhr) => {
                this.loginError(xhr.status);
                this.loginEnd();
            });
    }

    loginStart() {
        console.log("start");
        if (this.alert.element
            && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loadingComponent.display(this.form.parentNode);
        this.buttonLogin.buttonName.parentNode.removeChild(this.buttonLogin.buttonName);
    };

    loginEnd() {
        this.loadingComponent.hide();
        this.buttonLogin = new ButtonComponent("Login", "submit", "Login", "post");
        this.buttonLogin.display(this.div1);
        this.buttonLogin.buttonName.addEventListener("click", (event) => { this.clickButtonLogin(event); });

        console.log("end");
    };

    loginSuccess(user) {
        UserService.get().token = user.token;
        Router.navigate("home");

        console.log("success");

    };
    loginError(status) {

        if (404 === status) {
            this.alert.text = "page not found";

        }
        else if (500 === status) {
            this.alert.text = "Service unvailable"

        }
        else if (0 === status) {
            this.alert.text = "network Error"
        }
        this.alert.display(this.div1)
        console.log("error");
    };

    hide() {
        this.inputLogin.hide();
        this.inputPassword.hide();
        this.buttonLogin.hide();
    }

}
