import { User } from "./shared/models/user.model";
import { TitleComponent } from "./shared/components/title.component";
import { RegisterButton } from "./shared/components/register-button.component";
import { LoginForm } from "./shared/components/loginForm.component";

const div1 = document.createElement("div");
document.body.appendChild(div1);
const titleComponent = new TitleComponent (div1);
const registerButton = new RegisterButton(div1);

const loginForm = new LoginForm(div1);




// let login = "";
// let password = "";

// let valid = false;

// let pageTitle = "Game Session Society";
// const logoLink = "image/logo/logo.png";

// const register = null;
// const registerLink = "/register";
// const registerText = "Register";

// const go = null;
// const goLink = "/home";
// const goText = "Go";

// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const img = document.createElement("img");
//const pageTitle =  document.createElement("h1");
// const form = document.createElement("form");
// const inputLogin = document.createElement("input");
// const inputPassword = document.createElement("input");
// const buttonGo = document.createElement("button");
// const buttonRegister = document.createElement("button");
// const text = document.createTextNode("Game Session");
// const loginText = document.createTextNode("Login");
// const registerText = document.createTextNode("Register");
// const buttonGoLink = document.createElement("a");
// const buttonRegisterLink = document.createElement("a");

// div1.setAttribute("class","div1");
// div2.setAttribute("class","div2");
// img.setAttribute("class","imgLogo");
// img.setAttribute("src","assets/images/wg.png");
// img.setAttribute("alt","logo Worlds of  game");
// form.setAttribute("class","form");
// form.setAttribute("method","post");
// form.setAttribute("action","");
// inputLogin.setAttribute("id","inputLogin");
// inputLogin.setAttribute("type","text");
// inputLogin.setAttribute("placeholder","Email");
// inputLogin.setAttribute("action","");
// inputPassword.setAttribute("id","inputPassword");
// inputPassword.setAttribute("type","text");
// inputPassword.setAttribute("placeholder","Password");
// buttonGo.setAttribute("class","buttonGo");
// buttonGo.setAttribute("type","submit");
// buttonRegister.setAttribute("class", "buttonRegister");
// buttonRegister.setAttribute("type","submit");
// buttonGoLink.setAttribute("href","https://fr.wikipedia.org");
// buttonRegisterLink.setAttribute("href","https://www.google.fr");


// div2.appendChild(img);
//pageTitle.appendChild(text);
//div2.appendChild(pageTitle);
// form.appendChild(inputLogin);
// form.appendChild(inputPassword);
// buttonGo.appendChild(loginText);
// form.appendChild(buttonGoLink);
// buttonGoLink.appendChild(buttonGo);
// buttonRegisterLink.appendChild(buttonRegister);
// buttonRegister.appendChild(registerText);
// div1.appendChild(form);
// div1.appendChild(div2);
// div1.appendChild(buttonRegisterLink);
// document.body.appendChild(div1);


// const div1 = document.createElement("div");
//const div2 = document.createElement("div");
// div1.setAttribute("class","div1");
// div2.setAttribute("class","div2");
// div1.appendChild(div2);




// const setAttribute = (name, json) =>{ 
//   for (const key in json){
//     name.setAttribute(key,json[key]);
//   };       
// };


// const displayTitle = (Titletext) => {
//   const pageTitle =  document.createElement("h1");
//  const text = document.createTextNode(Titletext);
//   pageTitle.setAttribute("class","pageTitle"); 
//   const img = document.createElement("img");
   
//   setAttribute(img,{
//     class : "imgLogo",
//     src:"assets/images/wg.png",
//     alt:"logo Worlds of  game"
//   });   
//   pageTitle.appendChild(text);
//   div2.appendChild(pageTitle);
//   div2.appendChild(img);
//   console.log("ok");
// };

// const displayLoginForm = () => {

//   const form = document.createElement("form");
//   const inputLogin = document.createElement("input");
//   const inputPassword = document.createElement("input");
//   const buttonGo = document.createElement("button");
//   const loginText = document.createTextNode("Login");
//   const buttonGoLink = document.createElement("a");
//   setAttribute(form, {
//     class:"form",
//     method:"post",
//     action:""
// });
//   setAttribute(inputLogin, {
//     id:"inputLogin",
//     type:"text",
//     placeholder:"Email",
//     value:newUser.login,
//     action:""
//   });
//   setAttribute(inputPassword, 
//     {
//     id:"inputPassword",
//     type:"text",
//     placeholder:"Password",
//     value:newUser.password
// });
//   setAttribute(buttonGo,{
//   text:"Go",
//   type:"submit",
//   href:"https://fr.wikipedia.org"});  
//   form.appendChild(inputLogin);
//   form.appendChild(inputPassword);
//   form.appendChild(buttonGoLink);
//   buttonGo.appendChild(loginText);
//   buttonGoLink.appendChild(buttonGo);
//   div1.appendChild(form);
// };

// const displayRegisterButton = () => {
//   const buttonRegister = document.createElement("button");
//   const registerText = document.createTextNode("Register");
//   const buttonRegisterLink = document.createElement("a");
//   setAttribute(buttonRegister,{
//     class:"buttonRegister",
//     type:"submit",
//     }); 
//   setAttribute(buttonRegisterLink,{
//     href:"https://www.google.fr"
//   });  
//   buttonRegisterLink.appendChild(buttonRegister);  
//   buttonRegister.appendChild(registerText);
//   div1.appendChild(buttonRegisterLink);
// };

// const displayLogin = () => {  
//  // displayTitle("Game Session");
//   displayLoginForm();
//   displayRegisterButton();
 
// };

// displayLogin();

// const user = new User("licorne", 
// "test@example.com"
// );


 






