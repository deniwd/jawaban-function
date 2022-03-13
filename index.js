/** Task 1 : Bilangan Prima 
 * Print N bilangan angka prima pertama
 * 
 * Test case
 * printPrime(5)
 * 2 3 5 7 11
 * 
 */

 function checkFactor(n){
    let countFactor = 0;
    for(var i = 1; i<= n; i++){
        if(n % i === 0){
            countFactor++;
        }
    }
    return countFactor;
}

// Pengertian Bilangan Prima : bilangan yang hanya memiliki 2 faktor: 1 dan bilangan itu sendiri
function checkPrime(n){
    let jumlahFaktor = checkFactor(n);
    if(jumlahFaktor === 2){
        return true
    } else {
        return false
    }
}

function printNumbers(num) {
    let i = 1;
    let hitung = 1;
    let tempArray = [];    
while ( i <= num) {
    var prima = checkPrime(hitung);
    if ( prima === false) {
        hitung++;
    } else {
    if ( prima === true) {
        tempArray.push(hitung);
        hitung++;
        i++;
        }
    }
   
}
console.log(tempArray);
}

console.log("------------- ");
console.log(" ");
console.log("Task 1:")
console.log(" ");
printNumbers(5)
console.log(" ");
console.log("------------- ");


/** Task 2 : Triple Pythagoras
 * 3^2 + 4^2 = 5^2 => 9 + 16 = 25
 * 6^2 + 8^2 = 10^2 => 36 + 6 = 100
 * 
 * function triple(a, b, c)
 * 
 * console.log(triple(3,4,5)) // true
 * console.log(triple(3,3,3)) // false
 *  * 
 */


function triple(a,b,c) {
    let num_a = a ** 2;
    let num_b = b ** 2;
    let num_c = c ** 2;
    let result = ""
    if ((num_a + num_b) == num_c) {
    let result = "true";
    console.log(result);
    } else {
    let result = "false";
    console.log(result);
    }
    return result;
}

console.log(" ");
console.log("Task 2:")
console.log(" ");
console.log(triple(3,4,5));
console.log(" ");
console.log("------------- ");


/** Task 3 : Pasangan terbesar
 * splitToArray : mengambil pasangan angka ke dalam array
 * contoh:
 *      let input = "5279312" -> [52,27,79,93,31,12]
 * 
 * findTheLargest : function utama menghasilkan number
 * 
 * function splitArray(string) {
 * }
 * 
 * function findTheLargest(string) {
 * let arrayNumbers = splitToArray(string);
 * }
 *  
 */


console.log(" ");
console.log("Task 3:");
console.log(" ");

function splitToArray(input) {
let tempStr = "";
let tempAngka = [];
let i = 0;

if (input.length <= 1) {
    input = " " + input;
}

while (i < input.length-1) {
    tempStr = input[i] + input[i+1];
    tempAngka.push(Number(tempStr));
    i++;
}
return tempAngka
}

function findTheLargest(input) {
let tempNum = 0;
let tempStr = "";
let scores = splitToArray(input);
let i = 0;

while (i < scores.length) {
    if (scores[i+1] > scores[i]) {
        tempNum = scores[i+1];
    } 
    i++;
}
if (i <= 1) {
    tempNum = scores[0];
}
tempStr = String(tempNum);   
if (scores[0] === undefined) {
    tempStr = "Input number";
}
return tempStr;
}

console.log(findTheLargest("5275789312"));
console.log(findTheLargest("313282787"));
console.log(findTheLargest("19"));
console.log(findTheLargest("7"));
console.log(findTheLargest(""));

console.log(" ");
console.log("------------- ");
