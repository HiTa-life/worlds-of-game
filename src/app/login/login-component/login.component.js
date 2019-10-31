import { User } from "../../../shared/models/user/user.model";
import { TitleComponent } from "../../../shared/components/title/title.component";
import { RegisterButtonComponent } from "../register-button/register-button.component";
import { LoginFormComponent } from "../login-form-component/login-form.component";
import { Component } from "../../../shared/components/component";

export class LoginComponent extends Component {

    constructor() {
        super();
    }

    display() {
        const div1 = document.createElement("div");
        const titleComponent = new TitleComponent("Worlds of Game");
        const registerButton = new RegisterButtonComponent("Register");
        const user = new User();
        const loginForm = new LoginFormComponent("Login");
        user.nameUser.surName = "john";
        user.password = "blabla";
        titleComponent.display(div1);
        registerButton.display(div1);
        loginForm.display(div1, user);
        document.body.appendChild(div1);
    }

}
