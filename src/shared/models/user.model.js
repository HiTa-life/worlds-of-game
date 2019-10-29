import { MailUser } from "./mailUser.model";
import { NameUser } from "./nameUser.models";
import { AddressUser } from "./addressUser.model";
import { PhoneUser } from "./phoneUser.model";
import { Password } from "./passwordUser.model";


export class User {

    constructor() {
        this.nameUser = new NameUser();
        this.mailUser = new MailUser();
        this.addressUser = new AddressUser();
        this.phoneUser = new PhoneUser();
        this.password = new Password();

    }

};