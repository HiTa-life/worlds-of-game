import { Components } from "./super-component";


export class TitleComponent extends Components {

  constructor(div1) {
    super();
    const pageTitle = document.createElement("h1");
    const img = document.createElement("img");
    this.text = document.createTextNode("Worlds of Game");


    super.setAttribute(pageTitle, { class: "pageTitle" });
    super.setAttribute(img, {
      class: "imgLogo",
      src: "assets/images/wg.png",
      alt: "logo Worlds of  game"
    });

    div1.appendChild(pageTitle);
    div1.appendChild(this.text);
    div1.appendChild(img);
  }

}

