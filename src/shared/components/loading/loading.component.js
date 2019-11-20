import { Component } from "../component";
import { brotliDecompressSync } from "zlib";

export class LoadingComponent extends Component {
    constructor() {
        super();
        this.labelLoading;
        this.element = null;


    }
    display() {
         this.element = document.createElement("wog-loading-component")
        this.labelLoading = super.createAppendElement(this.element, "label");
        super.createAppendTextNode(this.labelLoading, "loading");
        document.body.appendChild( this.element);
    }

    hide() {
         this.element.parentNode.removeChild(this.element);
    }

}
