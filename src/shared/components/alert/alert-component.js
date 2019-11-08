

export class AlertComponent  {
    constructor (text){
        
        this.text = text;
    }
    display(div1){
        this.alert = document.createElement("label");
        this.textInsert = document.createTextNode(this.text);
        this.alert.appendChild(this.textInsert);
       this.form.insertBefore(this.alert,this.radioButtonMister);


    //     this.alert = super.createAppendElement(div1, "label");
    // super.createAppendTextNode(this.alert, this.text); 
   }
   hide(){
    this.alert.parentNode.removeChild(this.alert);
   }
}