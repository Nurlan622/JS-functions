// ------------------------------------Task a--------------------------------------------------------
// function calc(a, b, operator) {  
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Yanlis emeliyyat"
//     }    
// }
// alert(calc(Number(prompt("birinci eded")), Number(prompt("ikinci eded")), prompt("operator")));
// ------------------------------------Task b--------------------------------------------------------

// var person={
//     firstName:"Sabir",
//     lastName:"Guliyev",
//     fathername:"Mehti",
// };
// var method=prompt("Methodu daxil edin:");
// person.name=function(method) {
//     return this.firstName;    
// };
// person.surname=function(method){
//     return this.lastName + " " + this.firstName;
// };
// person.fullname=function(method){
//     return this.firstName[0] + "." + this.lastName + " " + this.fathername;
// };
//  console.log("Ad:" + person.name())
//  console.log("Soyad,ad:" + person.surname())
//  console.log("Ad,soyad,ata adi:" + person.fullname())

// ------------------------------------Task c--------------------------------------------------------


// function divideSay(num) {
//     var s = 0;
//     if (num > 0 && num < 50) {
//         for (let i = 1; i < num; i++) {
//             if (i % 3 === 0) {
//                 s++;
//             }
//         }
//     }
//     else if (num > 50 && num < 100){
//         for (let i = 1; i < num; i++) {
//             if (i % 5 === 0) {
//                 s++;
//             }
//         }
//     }
//     else{
//         for (let i = 1; i < num; i++) {
//             if (i % 8 === 0) {
//                 s++;
//             }
//         }
//     }
//     return s;
// }
// alert(divideSay(Number(prompt("ededi daxil edin"))));


