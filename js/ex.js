import {log, rol} from './UserConfig.js'

export class User{
    username = "admin";
    email = "info@admin.ge";
    avatar = "img/fish.png"
    role  = 1;
    login = true;
    constructor(
        role, login
    ){
       this.role = role;
       this.login = login
    }

    userole(){
        return this.role;
    }

    islogin(){
        return this.login;
    }
   
}