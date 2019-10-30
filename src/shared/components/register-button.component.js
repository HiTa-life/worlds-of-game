import { Components } from "./super-component";

export class RegisterButton extends Components {
     constructor(div1) {
         super();
         const buttonRegister = document.createElement("button");
           const registerText = document.createTextNode("Register");
           const buttonRegisterLink = document.createElement("a");
           super.setAttribute(buttonRegister,{
             class:"buttonRegister",
             type:"submit",
             }); 
           super.setAttribute(buttonRegisterLink,{
             href:"https://www.google.fr"
           });  

           buttonRegisterLink.appendChild(buttonRegister);  
           buttonRegister.appendChild(registerText);
           div1.appendChild(buttonRegisterLink);
         };
     }

