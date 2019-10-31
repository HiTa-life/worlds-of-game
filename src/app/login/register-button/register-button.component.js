import { Component } from "../../../shared/components/component";

export class RegisterButtonComponent extends Component {
  constructor(textButtonRegister) {
    super();
    this.textButtonRegister = textButtonRegister;
  }


  display(div1) {
    const buttonRegisterLink = super.createAppendElement(div1, "a");
    const buttonRegister = super.createAppendElement(buttonRegisterLink, "button");
    super.createAppendTextNode(buttonRegister, this.textButtonRegister);
    super.setAttribute(buttonRegister, { class: "buttonRegister", type: "submit", });
    super.setAttribute(buttonRegisterLink, { href: "https://www.google.fr" });
  }

}