import { BrandTitle } from "../../../shared/components/brand/brand-title";
import { LoginFormComponent } from "../login-form-component/login-form.component";
import { Component } from "../../../shared/components/component";
import { UserService } from "../../../shared/services/user.service";
import { ButtonComponent } from "../../../shared/components/button/button-component";
import { AlertComponent } from "../../../shared/components/alert/alert-component";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { Router } from "../../../shared/router/router";

export class LoginComponent extends Component {

    constructor() {
        super();
        this.titleComponent;
        this.registerButton;
        this.loginForm;
        this.loadingComponent = new LoadingComponent();
             
    }

    display() {
        const user = UserService.get();
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");

        this.titleComponent = new BrandTitle("Worlds of Game","assets/images/logo-color.png");
       
        this.labelPassword = super.createAppendElement(div2, "label");
        super.createAppendTextNode(this.labelPassword, "password");
        this.registerButton = new ButtonComponent("Register","submit","Register","post"); 
        
        this.labelEmail = super.createAppendElement(div3, "label");
        super.createAppendTextNode(this.labelEmail, "email");        
        this.loginForm = new LoginFormComponent("Login");        
        this.titleComponent.display(div1);
        this.registerButton.display(div1);    
        this.loginForm.display(div1);

        div2.appendChild(div3);
        div1.appendChild(div2);
        this.registerButton
        .buttonName
        .addEventListener("click", () => Router.navigate("register"));        
        document.body.appendChild(div1);
     }
     hide(){
         this.titleComponent.hide();
         this.label.password.hide();
         this.registerButton.hide();
         this.labelEmail.hide();
         this.loginForm.hide();     

     }
    
    }
   

