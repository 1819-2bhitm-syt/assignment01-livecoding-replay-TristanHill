//const os = require("os");
//console.log(os.cpus());

function Person(vorname,nachname){
    this.vorname = vorname;
    this.nachname = nachname;
}

Person.prototype.getName = function () {
    return this.vorname + " " + this.nachname;
};

let hans = new Person("Hans","Müller");
console.log(hans.getName());