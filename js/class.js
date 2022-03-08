// async function name(){

 

//     return  {
//         name:"123"
//     }
// }

// name().then(respnse => {
//    return JSON.stringify(respnse)
// })
// .then(resp=> {
//     return JSON.parse(resp);
// })
// .then(data=>{
//     s =  data
// })

// var myHeaders = new Headers();
// myHeaders.append('Content-Type', 'image/jpeg');

// fetch('https://jsonplaceholder.typicode.com/photos', {
//  method:"GET",
//  formData:{name:"1321", price:"5798"},
//  headers:myHeaders

// })
// .then(ress=>ress.json())
// .then(data=>{

//     getData(data);

// })
 
 
// function getData(data){
//      data.forEach(element => {
//          console.log(element)
//     });
// }

class User {
    static  username = "admin23";
    lastname = "userasdmin";

    constructor(role){
     this.role = role;
    }


    userName(){
        if (this.role == "admin") {
             return true;
        }
       return false;
    }

}

class Admin extends User {

    constructor(role){
        super(role);
    }
    
    isAdmin(){
        if (super.userName()) {
            return "გამარჯობა ადმინ"
        }
        return "გამარჯობა სტუმარო"
    }

}

//let user = new User('moderator');

let admin = new Admin('moderator');

console.log(admin.isAdmin())


class Slider {

    constructor(selector, config){
        this.selector = selector;
        this.config = config;


        this.Init();
    }


   Init(){
        let range = document.querySelector( this.selector );
        //set attribute
        for (const key in this.config.attr) {
             range.setAttribute(key,  this.config.attr[key])
        }

        //set style
           for (const key in this.config.style) {
            range.style[key] = this.config.style[key];
       }

       let th = this;

       range[this.config.method] = function(){
         //output
       document.querySelector(th.config.outp).innerHTML = range.value;
       }
     

        
   } 


}