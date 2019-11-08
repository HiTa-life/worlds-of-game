import { Component } from "../component";

export class LoadingComponent extends Component {
    constructor() {
        super();
        this.labelLoading;


    }
    display(div1) {
        this.labelLoading = super.createAppendElement(div1, "label");
        super.createAppendTextNode(this.labelLoading, "loading");
    }

    hide() {
        this.labelLoading.parentNode.removeChild(this.labelLoading);
    }

}