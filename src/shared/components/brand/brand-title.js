import { Component } from "../component";



export class BrandTitle extends Component {

  constructor(textTitle,img) {
    super(); 
    this.title;;     
    this.textTitle = textTitle;
    this.img = img;
  }

  display(div1) {
    this.title = super.createAppendElement(div1, "h1");   
    this.textTitle = super.createAppendTextNode(this.title, this.textTitle);    
    this.img = super.createAppendElement(div1, "img");
    super.setAttribute(this.img, { class: "imgLogo", src: "assets/images/logo-color.png", alt: "logo Worlds of  game", width : "100px" });
  }

  hide(){
    this.title.hide();
    this.textTitle.hide();
    this.img.hide();
  }

}


