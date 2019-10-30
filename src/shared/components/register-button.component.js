import { Components } from "./super-component";

export class RegisterButton extends Components {
  constructor() {
    super();
    this.buttonRegister;
    this.buttonRegisterLink;
  }
    

  display (div1) {
    const buttonRegisterLink = super.createAppendElement(div1, "a");
    const buttonRegister = super.createAppendElement(buttonRegisterLink,"button");
    super.createAppendTextNode(buttonRegister, "Register");
    
    super.setAttribute(buttonRegister, {
      class: "buttonRegister",
      type: "submit",
    });
    super.setAttribute(buttonRegisterLink, {
      href: "https://www.google.fr"
    });
  }
  
}

