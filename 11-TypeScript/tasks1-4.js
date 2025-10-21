// 1- Create array that accept number only
var nums = [1, 2, 3, 4, 5];
// 2- Create array that accept string and number only and print all items
var arrData = ["Hello", 42, "TypeScript", 100];
console.log("--- --- TASK 02 --- ---");
arrData.forEach(function (item) {
    console.log(item);
});
console.log("--- --- --- --- --- ---");
// 3- Create a variable that accept number and Boolean only
var val;
console.log("--- --- TASK 03 --- ---");
val = 10;
console.log(val);
val = true;
console.log(val);
console.log("--- --- --- --- --- ---");
// 4-	Create function with two parameter and call it without any args
function add(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log("--- --- TASK 04 --- ---");
console.log(add()); // 0
console.log(add(5, 10)); // 15
console.log("--- --- --- --- --- ---");
