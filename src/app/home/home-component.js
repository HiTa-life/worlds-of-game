import { LoginComponent } from "../login/login-component/login.component";
import { RegisterComponent } from "../register/register-component";
import { ButtonComponent } from "../../shared/components/button/button-component";
import { Component } from "../../shared/components/component";
import { BrandTitle } from "../../shared/components/brand/brand-title";


export class HomeComponent extends Component {
    constructor() {
            super();
            this.element = null;
            this.buttonProposed;
            this.buttonSearch;
            this.question;            
    }

     
     display() {
        this.element = document.createElement("app-home");
        this.question = super.createAppendElement(div1,"label")
        super.createAppendTextNode(this.question,"Ready for a Game Party?")
        this.question.display(div1);
        this.titleComponent = new BrandTitle("Welcome to Game Session Society");
        this.titleComponent.display(div1);
        this.buttonProposed = new ButtonComponent("Proposed Game", "submit", "Proposed Game", "post");
        this.buttonProposed.display(div1);
        this.buttonSearch= new ButtonComponent("Search Game", "submit", "Search Game", "post");
        this.buttonSearch.display(div1);
        document.body.appendChild(div1);
     }
    hide(){
        this.question.hide();
        this.titleComponent.hide();
        this.buttonProposed.hide();
        this.buttonSearch.hide();
        this.element.parentNode.removeChild(this.element);
    }
}
