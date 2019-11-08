
const routes = {};
let route = null;

export class Router {
  
  
    static addComponent(name, url, component) {
      routes[name] = {
        url : url,
        component : component
      };      
    }

  
  static navigate(name) {
    if(route){
      route.component.hide();
    }
    const route = routes[name];
    history.pushState({},name,route.url);
    route.component.display();   
  }
}
    
 


