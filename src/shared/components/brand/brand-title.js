import { Component } from "../component";



export class BrandTitle extends Component {

  constructor(textTitle) {
    super(); 
    this.element = null;
    this.title = null;  
    this.textTitle = textTitle;
    this.img = null;
  }

  display(div1) {
    this.element = document.createElement("wog-brand-title")
    this.title = super.createAppendElement(this.element, "h1"); 
    this.textTitle = super.createAppendTextNode(this.title, this.textTitle);    
    this.title.display(this.element); 
    this.img = super.createAppendElement(this.element, "img");
    super.setAttribute(this.img, { class: "imgLogo", src: "assets/images/logo-color.png", alt: "logo Worlds of  game", width : "100px" });
    this.img.display(this.element);
    document.body.appendChild(this.element);

  }

  hide(){
    this.title.hide();
    this.textTitle.hide();
    this.img.hide();
    this.element.parentNode.removeChild(this.element);
  }

}


