import { User } from "../models/user/user.model";
import $ from "jquery";

const user = new User();

export class UserService {
    static get(){
        return user;
    }
    static login(){
        return $.ajax({
            url: `http://localhost:8000/login?email=${user.email}&password=${user.password}`,
            method: "GET",
            contentType: "application/json"                      
        })    
    }

    static post(){
        return $.ajax({
            url: "http://localhost:8000/users",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),
            dataType: "json"            
        })    
    }

}
