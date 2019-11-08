import { Component } from "../component";



export class BrandTitle extends Component {

  constructor(textTitle,img) {
    super(); 
    this.title;;     
    this.textTitle = textTitle;
    this.img = img;
  }

  display() {
    this.div1 = document.createElement("wog-brand-title")
    this.title = super.createAppendElement(this.div1, "h1");   
    this.textTitle = super.createAppendTextNode(this.title, this.textTitle);    
    this.img = super.createAppendElement(this.div1, "img");
    super.setAttribute(this.img, { class: "imgLogo", src: "assets/images/logo-color.png", alt: "logo Worlds of  game", width : "100px" });
    document.body.appendChild(this.div1);

  }

  hide(){
    this.title.hide();
    this.textTitle.hide();
    this.img.hide();
  }

}


