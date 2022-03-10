var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var myname = 5;
var x = 12;
var y = 2.1123123121231231231233;
var arr = ["asd", "asd", 213];
var user = {
    name: "admin",
    age: 312,
    role: "admin",
    test: function () {
        var x = 'true';
        return x != 'true';
    }
};
var logoobj = {
    errorlog: 'home/bin/www/public_html/index.php',
    successlog: 'home.php',
    data: '2020/03/15',
    savelog: function () {
        return "asd";
    }
};
logoobj.savelog();
function sm(name, dat) {
    console.log("asd");
}
sm("sadsa");
sm([654]);
var Car = [];
Car.push({ name: "asd" });
var input = document.querySelector('#input');
input.addEventListener('input', function () {
    console.log(input.value);
});
function component(obj) {
    console.log(obj);
}
var Animal = /** @class */ (function () {
    function Animal(animalname) {
        this.animalname = animalname;
    }
    Animal.prototype.getName = function () {
        return "this.animalname";
    };
    Animal = __decorate([
        component({
            name: "asd",
            age: 12
        })
    ], Animal);
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(animalname) {
        return _super.call(this, animalname) || this;
    }
    Dog.prototype.GetDog = function () {
        return _super.prototype.getName.call(this);
    };
    return Dog;
}(Animal));
var animal = new Animal("wolf");
//console.log(animal.getName())
