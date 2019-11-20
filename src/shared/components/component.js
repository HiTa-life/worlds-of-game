export class Component {

    constructor(name, json) {
        this.name = null;
        this.json = null;
    }

    setAttribute(name, json) {
        for (const key in json) {
            name.setAttribute(key, json[key])
        };
    }

    createAppendElement(parent, tagName) {
        const child = document.createElement(tagName);
        parent.appendChild(child)
        return child;
    }

    createAppendTextNode(parent, tagTextNode) {
        const text = document.createTextNode(tagTextNode);
        parent.appendChild(text)
        return text;
    }
   hide(){
       this.name.hide();
       this.json.hide();
    this.element.parentNode.removeChild(this.element);
   }
}
