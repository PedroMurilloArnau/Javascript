console.log("=========== COMIENZO MEDIA DE 10 NUMEROS==============")
const person = {
    name: "Pedro",
    surname: "Murillo",
    age: 25,
    nameSurname: function() {
        return this.name + " " + this.surname
    }
};
console.log(person.nameSurname())
window.onload = function text(){document.getElementById("demo").innerHTML =
person.name + " de apellido " + person.surname + " tiene " + person.age +
" años.";
}
window.onload = function showPerson(){
    document.getElementById("demo2").innerHTML = person.name;
    var nameSurname = person.nameSurname();
    document.getElementById("demo3").innerHTML = nameSurname;
}
function myFunction(p1,p2) {
    return alert(p1 * p2);
}
function typeVar(){
    var x = "p3";
    console.log(typeof x + "es el tipo de valor de " +  x)
    return document.getElementById("tipeVari").innerHTML = typeof x;   
}
