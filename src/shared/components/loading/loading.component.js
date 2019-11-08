import { Component } from "../component";
import { brotliDecompressSync } from "zlib";

export class LoadingComponent extends Component {
    constructor() {
        super();
        this.labelLoading;


    }
    display() {
        this.div1 = document.createElement("wog-loading-component")
        this.labelLoading = super.createAppendElement(this.div1, "label");
        super.createAppendTextNode(this.labelLoading, "loading");
        document.body.appendChild(this.div1);
    }

    hide() {
        this.labelLoading.parentNode.removeChild(this.labelLoading);
    }

}