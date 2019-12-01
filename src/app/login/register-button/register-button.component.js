import { Component } from "../../../shared/components/component";

export class RegisterButtonComponent extends Component {
  constructor(textButtonRegister) {
    super();
    this.textButtonRegister = null;
    this.buttonRegister;
   
  }


  display(parent) {
    this.element = super.createAppendElement("app-button-register")
    this.buttonRegisterLink = super.createAppendElement(this.element, "a");
    this.buttonRegister = super.createAppendElement(buttonRegisterLink, "button");
    super.createAppendTextNode(this.buttonRegister, this.textButtonRegister);
    super.setAttribute(this.buttonRegister, { class: "buttonRegister", type: "submit" });
    super.setAttribute(buttonRegisterLink, { href:"" });
    document.body.appendChild(this.element);
  }
   hide() {
        document.body.removeChild(this.element);
    }
  }
