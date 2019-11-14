

export class AlertComponent  {
    constructor (text){
        
        this.text = text;
        this.div1= null;
    }
    display(div1){
        this.div1 = document.createElement("wog-alert-component")
        this.element = document.createElement("label");
        this.textInsert = document.createTextNode(this.text);
        this.element.appendChild(this.textInsert);
       div1.parentNode.insertBefore(this.element,div1);
       //div1.insertBefore(this.alert,div1.firstChild);
       this.div1.appendChild(this.element)
       document.body.appendChild(this.div1);

   }
   hide(){
    this.element.parentNode.removeChild(this.element);
   }
}