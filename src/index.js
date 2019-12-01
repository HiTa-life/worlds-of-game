//import 'bootstrap';
import { LoginComponent } from "./app/login/login-component/login.component";
import { RegisterComponent } from './app/register/register-component';
import { LoginFormComponent } from "./app/login/login-form-component/login-form.component";
import { LoadingComponent } from "./shared/components/loading/loading.component";
import { Router } from "./shared/router/router";
import { HomeComponent } from "./app/home/home-component";

// const loginForm = new LoginFormComponent();
// loginForm.display();

Router
  .addComponent(
    "login",
    "/login",
    new LoginComponent
      ).addComponent(
        "register",
        "/register",
        new RegisterComponent
          ).addComponent(
            "home",
            "/home",
            new HomeComponent
            )
            .navigate("login");
