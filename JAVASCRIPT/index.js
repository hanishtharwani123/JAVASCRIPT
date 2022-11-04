// 1. WAYS TO PRINT IN JAVASCRIPT
// console.log('Hello World');
// alert('hanish');
// document.write("This document write");
        

// 2. JAVASCRIPT CONSOLE API
// console.log('Hello World', 2+2);
// console.warn('This is warn');
// console.error('This is error');
// console.assert(8==6);


// 3. JAVASCRIPT VARIABLES
// What are VARIABLE? - Containers to store data values
let num1 = 22;
let num2 = 34;
console.log(num1+num2);


// 4. Data Types in JavaScript
// a - Primitive Data Type = STRING, NUMBER, BOOLEAN, UNDEFINED, NULL
let name = 'hanish';  
let num = 30;  
let isApproved = true;  
let firstName = undefined;
let lastName = null;

// b - Refernce Data Type = OBJECT, ARRAYS
// OBJECT
let marks = {
    hanish: 40,
    naman: 50,
    harry: 100
}
// Dot notataion
marks.hanish = 60;
// Bracket notation
marks['naman'] = 80;
console.log(marks.hanish);
console.log(marks.naman);
console.log(marks.harry);

// ARRAY
Colors = ['red', 'blue'];
Colors[2] = 'green';
Colors[3] = 1;
console.log(Colors[0]);
console.log(Colors.length);


// 5. OPERATORS IN JAVASCRIPT
let a = 20;
let b = 10;
console.log('The value of a + b is', a+b);
console.log('The value of a + b is', a-b);
console.log('The value of a + b is', a*b);
console.log('The value of a + b is', a/b);

// ASSINGMENT OPERATOR
let c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
console.log(c);

// COMPARISON OPERATOR
let x = 55;
let y = 78;
console.log(x>y);
console.log(x<y);
console.log(x==y);
console.log(x<=y);
console.log(x>=y);

// LOGICAL OPERATOR
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!false);
console.log(!true);


// 6. FUNCTION
function greet(name, lastName){
    console.log('hello ' + name + ' ' + lastName);
}
greet('hanish', 'tharwani');

function square(num){
    return num * num;
}
let result = square(2)
console.log(result);


// 7. CONDITIONALS IN JAVASCRIPT
let age = 20;
if (age > 18){
    console.log('You can vote');
}
else if (age == 18){
    console.log('You can vote at 18');
}
else{
    console.log('You cannot vote');
}


// 8. FOR LOOP IN JAVASCRIPT
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
for (let i = 0; i < 6; i++){
    console.log(arr[i]);
}

arr.forEach(function(element){
    console.log(element)
})


// 9. WHILE LOOP IN JAVASCRIPT
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
while (j<7){
    console.log(arr1[j]);
    j++;
}


// 10. DO-WHILE LOOP IN JAVASCRIPT
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let v = 0;
do{
    console.log(arr2[v]);
    v++;
}while (v < 8);

// EXAMPLE
for (let i = 0; i < 12; i++){
    console.log('Hello World');
}
let i1 = 0;
while(i < 11){
    console.log('Hello World');
    i++;
}
let i = 0;
do {
    console.log('Hello World');
    i++;
}while (i < 11);


// 11. BREAK AND CONTINUE STATEMENT
for (let i = 0; i < 11; i++){
    if (i == 5){
        break;
    }
    console.log(i);

}

for (let i = 0; i < 10; i++){
    if (i == 4){
        continue;
    }
    console.log(i);
}


// 12. ARRAY METHODS 
let fruits = ['Apple', 'Banana', 'Grapes', 'Mangoes'];
console.log(fruits.length);
console.log(fruits.pop());
console.log(fruits.push('Orange'));
console.log(fruits.shift());
console.log(fruits.toString());
console.log(fruits.sort());


// 13. STRING METHODS
let myString = "My name is hanish tharwani";
console.log(myString.length);
console.log(myString.indexOf("hanish"));
console.log(myString.lastIndexOf("hanish"));
console.log(myString.slice(0, 3));
console.log(myString.replace('hanish', 'rohan'));

// 14. DATES IN JAVASCRIPT
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


// 15. DOM MANIPULATION 
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
//elemClass[0].style.background = "violet";
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');
elemClass[0].classList.remove('text-success');
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('buttom');
console.log(tn);


function clicked(){
    console.log("The button was clicked");
}

window.onload = function(){
    console.log("The document was loaded");
}

// EVENTS IN JAVASCRIPT
firstContainer.addEventListener('click', function(){
    console.log('click on container');
})

firstContainer.addEventListener('mouseover', function(){
    console.log('mouse on container');
})

firstContainer.addEventListener('mouseout', function(){
    console.log('mouse out of container');
})

firstContainer.addEventListener('mouseup', function(){
    console.log('mouse up when clicked on container');
})

firstContainer.addEventListener('mousedown', function(){
    console.log('mouse down when clicked on container');
})


// ARROW FUNCTIONS
function summ(a, b){
    return a + b;
}

summ = (a, b)=>{
    return a + b;
}

logKaro = ()=>{
    console.log("I am your log");
}
// SET TIME OUT AND SET INTERVAL
//clr = setTimeout(logKaro, 5000);
//clr = setInterval(logKaro, 2000);


// JAVASCRIPT LOCALSTORAGE
//localStorage.setItem('name', 'hanish')
//localStorage
//localStorage.getItem('name')
//localStorage.clear()


// JSON
obj = {name: 'hanish', length: 1}
jso = JSON.stringify(obj)
console.log(jso)
parsed = JSON.parse('{"name": "hanish", "length": 1}')
console.log(parsed);



