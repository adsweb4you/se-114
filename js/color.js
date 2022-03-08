  function mixColor(){
    return "#000"
}

  let hex = {
    color1:"#000",
    color2:"#fff"
}

  class Animal {
    constructor(type){
        this.type  = type;
    }

    bark(){
        return "Dog"
    }
}


  class http {

   

    constructor(config, data){
        this.config  = config;

        
    }


  Request(){
 
        const xhttp = new XMLHttpRequest();
          
        xhttp.open("GET", this.config.url);
        xhttp.send();

    
           return xhttp
       

        
  }

}


export {http , Animal , mixColor , hex}