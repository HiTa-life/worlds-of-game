import { Components } from "./super-component";


export class TitleComponent extends Components {

  constructor(div1) {
    super();
    const pageTitle = super.createAppendElement(div1, "h1");
    const img = super.createAppendElement(div1, "img");
    this.text = super.createAppendTextNode(div1, "Worlds of Game");

    super.setAttribute(pageTitle, { class: "pageTitle" });
    super.setAttribute(img, {
      class: "imgLogo",
      src: "assets/images/wg.png",
      alt: "logo Worlds of  game"
    });
  }
}

