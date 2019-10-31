import { Component } from "../component";


export class TitleComponent extends Component {

  constructor(textTitle) {
    super();
    this.pageTitle;
    this.img;
    this.textTitle = textTitle;
  }

  display(div1) {
    const pageTitle = super.createAppendElement(div1, "h1");
    const img = super.createAppendElement(div1, "img");
    const text = super.createAppendTextNode(div1, this.textTitle);
    super.setAttribute(pageTitle, { class: "pageTitle" });
    super.setAttribute(img, { class: "imgLogo", src: "../../images/logo-color.png", alt: "logo Worlds of  game" });
  }

}


