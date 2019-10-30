export class Components {
    constructor(name, json) {
        this.name = name;
        this.json = json;
    }

    setAttribute (name, json) {
        for (const key in json) {
            name.setAttribute(key, json[key])
        };
    }
}
