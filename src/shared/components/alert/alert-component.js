

export class AlertComponent  {
    constructor (text){
        
        this.text = text;
    }
    display(div1){
        this.element = document.createElement("label");
        this.textInsert = document.createTextNode(this.text);
        this.element.appendChild(this.textInsert);
       div1.parentNode.insertBefore(this.element,div1);
       //div1.insertBefore(this.alert,div1.firstChild);

   }
   hide(){
    this.element.parentNode.removeChild(this.element);
   }
}