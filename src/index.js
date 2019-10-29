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

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const img = document.createElement("img");
const h1 =  document.createElement("h1");
const form = document.createElement("form");
const inputLogin = document.createElement("input");
const inputPassword = document.createElement("input");
const buttonGo = document.createElement("button");
const buttonRegister = document.createElement("button");
const text = document.createTextNode("Game Session");
const loginText = document.createTextNode("Login");
const registerText = document.createTextNode("Register");
const buttonGoLink = document.createElement("a");
const buttonRegisterLink = document.createElement("a");

div1.setAttribute("class","div1");
div2.setAttribute("class","div2");
img.setAttribute("class","imgLogo");
img.setAttribute("src","assets/images/wg.png");
img.setAttribute("alt","logo Worlds of  game")
form.setAttribute("class","form");
form.setAttribute("method","post");
form.setAttribute("action","");
inputLogin.setAttribute("id","inputLogin");
inputLogin.setAttribute("type","text");
inputLogin.setAttribute("placeholder","Email");
inputLogin.setAttribute("action","");
inputPassword.setAttribute("id","inputPassword");
inputPassword.setAttribute("type","text");
inputPassword.setAttribute("placeholder","Password");
buttonGo.setAttribute("class","buttonGo");
buttonGo.setAttribute("type","submit");
buttonRegister.setAttribute("class", "buttonRegister");
buttonRegister.setAttribute("type","submit");
buttonGoLink.setAttribute("href","https://fr.wikipedia.org");
buttonRegisterLink.setAttribute("href","https://www.google.fr");


div2.appendChild(img);
h1.appendChild(text);
div2.appendChild(h1);
form.appendChild(inputLogin);
form.appendChild(inputPassword);
buttonGo.appendChild(loginText);
form.appendChild(buttonGoLink);
buttonGoLink.appendChild(buttonGo);
buttonRegisterLink.appendChild(buttonRegister);
buttonRegister.appendChild(registerText);
div1.appendChild(div2);
div1.appendChild(form);
div1.appendChild(buttonRegisterLink);
document.body.appendChild(div1);


const createElement = (element,value)=>{
  document.createElement(value);
    return true;
};

const setAttribute = (element,name,value) =>{
    element.setAttribute(name,value);
    return true;
};

const appendChild = (element) => {
element.appendChild(element.createElement);
return true;
};