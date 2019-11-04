import { Component } from "../component";



export class BrandTitle extends Component {

  constructor(title,textTitle,img) {
    super(); 
    this.title = title;     
    this.textTitle = textTitle;
    this.img = img;
  }

  display(div1) {
    this.title = super.createAppendElement(div1, "h1");   
    this.textTitle = super.createAppendTextNode(this.title, "Worlds of game");    
    const img = super.createAppendElement(div1, "img");
    super.setAttribute(img, { class: "imgLogo", src: "assets/images/logo-color.png", alt: "logo Worlds of  game", width : "100px" });
  }

}


