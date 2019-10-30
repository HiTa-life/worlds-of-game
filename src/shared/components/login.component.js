import { User } from "../models/user.model";
import { TitleComponent } from "./title.component";
import { RegisterButton } from "./register-button.component";
import { LoginForm } from "./loginForm.component";

export class Login {

    constructor() {        
    }

        display(){
            const div1 = document.createElement("div");  

            const titleComponent = new TitleComponent();
            titleComponent.display(div1);

            const registerButton = new RegisterButton(); 
            registerButton.display(div1);

            const user = new User();
            user.nameUser.surName = "john";
            user.password = "blabla";
            const loginForm = new LoginForm();
            loginForm.display(div1,user);
            document.body.appendChild(div1);
        } 
        
      
    };
