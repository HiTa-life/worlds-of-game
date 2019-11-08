import { Component } from "../../../shared/components/component";

export class RegisterButtonComponent extends Component {
  constructor(textButtonRegister) {
    super();
    this.textButtonRegister = textButtonRegister;
    this.buttonRegister;
   
  }


  display(div1) {
    const buttonRegisterLink = super.createAppendElement(div1, "a");
    this.buttonRegister = super.createAppendElement(buttonRegisterLink, "button");
    super.createAppendTextNode(this.buttonRegister, this.textButtonRegister);
    super.setAttribute(this.buttonRegister, { class: "buttonRegister", type: "submit" });
    super.setAttribute(buttonRegisterLink, { href:"" });
  }

}