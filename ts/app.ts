let myname:string | number | object =  5;
let x:number = 12;
let y:any = 2.1123123121231231231233;
let arr:[string, string , number]     = ["asd", "asd",213];

let user:{
    name:string,
    age:number,
    role:string | number,
    test():boolean,
} = {
    name:"admin",
    age:312,
    role:"admin",
    test:function(){
        let x = 'true'
             return x != 'true'
    }
}


interface Log {
    errorlog:string,
    successlog:string,
  readonly  data:string,
    savelog?():void,
}

let logoobj:Log = {
    errorlog:'home/bin/www/public_html/index.php',
    successlog:'home.php',
    data:'2020/03/15',
    savelog:function(){
        return "asd"
    }
}



logoobj.savelog();

 function sm<T>(name:T, dat?:T):void{
     console.log("asd") 
}

sm<string>("sadsa");
sm<number[]>([654]);

 let Car = [];

 Car.push({name:"asd"})


 
 let input = document.querySelector('#input') as HTMLInputElement;

 input.addEventListener('input', function(){
    console.log( input.value);
 })


 interface animalTask{
    canJump:boolean,
    getName():void ,
    starts:string,
 }


 function component(obj:object):any{
     console.log(obj) ;
 }

 @component({
     name:"asd",
     age:12
 })

 class Animal implements animalTask{
    canJump:true;
    starts:"25/54.asd";
    animalname:string;

    constructor(animalname:string){
     this.animalname = animalname;
    }

      getName(){
        return "this.animalname";
    }
 }

 class Dog extends Animal {
    animalname:string;
     constructor(animalname:string){
         super(animalname);
     }


 GetDog(){
     return super.getName();
 }

 }

 let animal = new Animal("wolf");

 //console.log(animal.getName())

