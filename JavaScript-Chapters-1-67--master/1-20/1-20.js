// chapter no 1  task 1
alert("Hello! welcome here");

// chapter no 1  task 2
alert("Error! please enter a valid password");

// chapter no 1  task 3
alert("Welcome to JS land \n Happy Coding..");

// chapter no 1  task 4
alert("Welcome to js land ");

// chapter no 1  task 5
console.log("Hello! I am run js through my web browser's console.");

// chapter 2 started
// chapter 2 task no 1
var store = "Hello World";
alert("Task no 3" + store);

// chapter 2 task no 2
var studentName = " Abd";
var studentAge = " 18";
var certificate = " Mobile and web app development";
alert(" Task no 4 Student name: " + studentName);
alert("Student age: " + studentAge);
alert("Student certificate: " + certificate);

// chapter 2 task no 3
var username = "ABD";
var myname = "ABD";
var fullname = username + myname;
document.write("Task no 1 and 2" + fullname);
// var repeat = "Pizza";
// // var i=repeat;
// for(var i=5; i>=0 ; i--)
// {
//   for(var j=0; j<=i ;j--)
//   {
//       document.write(repeat[i]);
//       console.log(repeat[i]);
//   }
//      document.write('\n');
// }

// chapter 2 task no 4
var email = "ABD313@gmail.com";
alert("Task no 6 My email address is " + email);

// chapter 2 task no 5
var book = "A smarter way to learn javascript";
alert("Task no 7 I am trying to learn from the book " + book);

// chapter no 3 started
// chapter no 3 task 1

var visiterName = "John Doe";
var productTitle = "XYZ Clothing";
var quality = " 5 T-shirt(s) ";

document.write(visiterName + "ordered " + quality + "on " + productTitle);

// chapter no 3 task 2
alert("Assignment no 3 started!");
var age = "21";
alert("My age is " + age);

// chapter no 3 task 3
var birthYear = "1998";
document.write(
  "My birth year is " +
    birthYear +
    "<br>" +
    "Data type of my declare varaible is number"
);

//
// chapter 4 started
// chapter 4 task 1
alert("Assignment no 4 Started ..");
var $my_Class, $class, _mainClass;
var number2, $sign, _first, myName, your_name;
// var 4four ,@gmail , for ,&book *hello;  inlegal variables
document.write(
  "Rules for naming JS variables" +
    "<br>" +
    "  b)  Variable names can only contain  number, $ and _ For example $my_1stVariable " +
    "<br>" +
    "c) Variables must begin with a letter, $ or _. For example $name, _name or name" +
    "<br>" +
    "d)  Variable names are case sensitive " +
    "<br>" +
    "e) Variable names should not be JS Keywords."
);

// chapter 5 started
//chapter 5 <!-- task no 1 -->
var num1 = "7",
  num2 = "14";
var sum = +num1 + +num2;

//chapter 5 <!-- task no 2 -->
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var mod = num1 % num2;
alert("Assignment no 5 started ");
document.write("Sum of numbers are " + sum + "<br>");

//chapter 5 <!-- task no 3 -->
var variable;
document.write("Value of the variable is " + variable + "<br>");
variable = "10";
document.write("Value of variable after initialing " + variable + "<br>");
++variable;
document.write("Value of variable after increment is " + variable + "<br>");
variable += 7;
document.write("Value of variable after addtion is " + variable + "<br>");
--variable;
document.write("Value of variable after decrement is " + variable + "<br>");
variable %= 3;
document.write("The remainder is " + variable + "<br>");

//chapter 5<!-- task no 4 -->
document.write("<br> <br>" + "Movie tickets");
var ticket = "300",
  total;
total = ticket * 5;
document.write(
  "The cost of movie ticket is " +
    ticket +
    "<br>" +
    "The total cost of the tickets are " +
    total
);

//chapter 5<!-- task no 5 -->
document.write("<br> <br>" + "Table of 5" + "<br>");
var table = "5";
for (var i = 1; i <= 10; i++) {
  document.write(table);
  document.write("x");
  document.write(i);
  document.write("=");
  document.write(table * i);
  document.write("<br>");
}

//chapter 5<!-- task no 6 -->
document.write("<br> <br>" + "Temperature" + "<br>");
var temp = "36";
var fre = temp * (9 / 5) + 32;
document.write("celsius to fahrenheit is " + fre + "<br>");
var change;
change = (fre - 32) * (5 / 9);
document.write("fahrenheit to celsius is " + change);

//chapter 5<!-- task no 7 -->
document.write("<br> <br>" + "Shopping cart" + "<br>");
var price1 = "300";
var price2 = "500";
var quality1 = "2";
var quality2 = "3";
var shipping = "100";
var cartTotal;
cartTotal = price1 * quality1 + price2 * quality2;
document.write("price of 1 item is " + price1 + "<br>");
document.write("price of 2 item is " + price2 + "<br>");
document.write("order quality of 1 item is " + quality1 + "<br>");
document.write("order quality of 2 item is " + quality2 + "<br>");
document.write("Shipping charges" + shipping + "<br>");
document.write("Total cost of your order is " + cartTotal + "<br>");

//chapter 5 <!-- Task n0 8 -->
document.write("<br> <br>" + "Percentege" + "<br>");
var marks = "500";
var obt = "345";
var per = (obt / marks) * 100;
document.write(
  "Total marks is " +
    marks +
    "<br>" +
    "Marks obtained is " +
    obt +
    "<br>" +
    "The percentage of the student is " +
    per
);

//chapter 5<!-- Task no 9 -->
document.write("<br> <br>" + "Currency" + "<br>");
var us = "10";
var sr = "25";
var convert = us * 104.82 + sr * 28;
document.write("Currency in pakistan will be " + convert);

//chapter 5<!-- task no 10 -->
document.write("<br> <br>" + "Arithmetic operation" + "<br>");
var num = "6";

var save = num + 5 + num * 10 + num / 2;
document.write(save + "<br>");

//chapter 5<!-- Task no 11 -->
document.write("<br> <br>" + "Age calculator" + "<br>");
var currentYear = "2020";
var birthYear = "1998";
var ageStore = currentYear - birthYear;
document.write(
  "Current year " +
    currentYear +
    "<br>" +
    "birth Year is" +
    birthYear +
    "<br>" +
    "Your current age is" +
    ageStore
);

//chapter 5  <!-- TAsk no 12 -->
document.write("<br> <br>" + " Geometrizer" + "<br>");
var radius = "32";
var area = "10";
var circumference = 2 * 3.142 * radius;
document.write("The circumference of the circle is " + circumference + "<br>");
var area_circle = 2 * 3.142 * radius;
document.write("The circumference of the circle is " + circumference);

//chapter 5<!-- task no 13 -->
document.write("<br> <br>" + "Favourite snack data " + "<br>");
var snack_name = "kitkat";
var snack_age = "21";
var est_age = "55";
var per_day = "10";
var total_snack = est_age * per_day - snack_age * per_day;

document.write("Fav snack :" + snack_name + "<br>");
document.write("Current age :" + snack_age + "<br>");
document.write("Total estimate  :" + est_age + "<br>");
document.write("Per day:" + per_day + "<br>");
document.write(
  "You will need " +
    total_snack +
    "<br>" +
    "chocalate to last you untill the last ripe old age of " +
    est_age
);

// chapter 6-9 started
// chapter 6-9  task no 1
document.write("Arithmetic operation" + "<br>");
var num = "10";
document.write("The value of number is " + num + "<br>");
++num;
document.write("The value of ++num is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");
num++;
document.write("The value of num++ is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");
--num;
document.write("The value of --num is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");

num--;
document.write(" Now The value of num-- is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");

// // chapter 6-9  task no 2
document.write("<br> <br>" + "Result of varaibles" + "<br>");
var a = "2",
  b = "1";
document.write(a + "<br>");
document.write(b + "<br>");
var result = --a - --b + ++b + b--;

document.write(result + "<br>");

//// chapter 6-9   task no 3
var name;
name = prompt("Enter your name");
alert("hello " + name + "\n" + "Welcome to our site");

//// chapter 6-9   task no 5
document.write("<br> <br>" + "use input for tables" + "<br>");
var number = Number(prompt("Enter a number"));
var store = typeof number;
// document.write(store);
if (store === "number") {
  for (var i = 1; i <= 10; i++) {
    document.write(number);
    document.write("x");
    document.write(i);
    document.write("=");
    document.write(number * i);
    document.write("<br>");
  }
} else if (store === "NaN") {
  number = "5";
  for (var i = 1; i <= 10; i++) {
    document.write(number);
    document.write("x");
    document.write(i);
    document.write("=");
    document.write(number * i);
    document.write("<br>");
  }
}

//// chapter 6-9   task no 6
document.write("<br> <br>" + "student record" + "<br>");
var sub1, sub2, sub3, obt_marks, total_marks, percent;
sub1 = Number(prompt("Enter the marks of subject 1 "));
sub2 = Number(prompt("Enter the marks of subject 2 "));
sub3 = Number(prompt("Enter the marks of subject 3 "));
obt_marks = sub1 + sub2 + sub3;
total_marks = "300";
percent = (obt_marks / total_marks) * 100;
document.write("sub1 english :" + sub1 + "<br>");
document.write("sub2 urdu :" + sub2 + "<br>");
document.write("sub3 math :" + sub3 + "<br>");
document.write("obtained marks :" + obt_marks + "<br>");
document.write("percentage :" + percent + "<br>");

// chapter 9-11 started
// chapter 9-11 task no 1

// chapter 9-11 <!-- Task no1  -->
var city;
city = prompt("Enter the name of your city");
if (city === "karachi") {
  document.write("Welcome to city of lights ");
}

//// chapter 9-11  !--Task no2 -->
var gender;
city = prompt("Enter gender");
if (city === "male") {
  alert("Good morning Sir ");
} else if (city === "female") {
  alert("Good morning Ma'am ");
}

// <
//// chapter 9-11  !--Task no3-- >
var signal;
city = prompt("Enter signal color");
if (signal === "red") {
  alert("please stop ");
} else if (signal === "green") {
  alert("Read to move");
} else if (signal === "yellow") {
  alert("move move");
}

// <
//// chapter 9-11  !--Task no4-- >
var fuel;
fuel = prompt("Enter remaining fuel");
if (fuel <= "0.25") {
  alert("please refill your fuel ");
}

//// chapter 9-11  task no 5
var a = "4";
++a;
if (++a === "5") {
  alert("given condition for variable a is true");
}
var c = "12";
++c;
if (c++ === "13") {
  alert("condition 1 is true");
}
if (c === "13") {
  alert("condition 2 is true");
}
if (++c < "14") {
  alert("condition 3 is true");
}
if (c === "14") {
  alert("condition 4 is true");
}

var materialCost = "20000";
var laborCost = "2000";
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  console.log("The cost equals to" + totalCost);
}
if (totalCost === laborCost + materialCost) {
  alert("True");
} else {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

//// chapter 9-11  task no 6
document.write("<br> <br>" + "student record" + "<br>");
var sub1, sub2, sub3, obt_marks, total_marks, percent;
sub1 = Number(prompt("Enter the marks of subject 1 "));
sub2 = Number(prompt("Enter the marks of subject 2 "));
sub3 = Number(prompt("Enter the marks of subject 3 "));
obt_marks = sub1 + sub2 + sub3;
total_marks = "300";
percent = (obt_marks / total_marks) * 100;
document.write("sub1 english :" + sub1 + "<br>");
document.write("sub2 urdu :" + sub2 + "<br>");
document.write("sub3 math :" + sub3 + "<br>");
document.write("obtained marks :" + obt_marks + "<br>");
document.write("percentage :" + percent + "<br>");
if (percent >= 80) {
  document.write("A+" + "<br>" + "Excellent work");
} else if (percent >= 70 && percent <= 80) {
  document.write("A" + "<br>" + "Good work");
} else if (percent >= 60 && percent <= 70) {
  document.write("B" + "<br>" + "Fail work");
} else {
  document.write("fail");
}

//
//// chapter 9-11 task no 7
document.write("<br> <br>" + "GAME" + "<br>");
var myNum = "5";
var userNum;
userNum = Number(prompt("Enter number"));
if (myNum === userNum) {
  alert("Bingo");
} else if (++myNum === userNum) {
  alert("Close!");
}

//// chapter 9-11task no 8\
var d_num;
d_num = Number(prompt("enter dnum"));
d_num % 3;
if ((d_num = 0)) {
  alert("NUmber divisible by 3");
}

//// chapter 9-11  task no 9
var check_num;
check_num = Number(prompt("enter num"));
if (check_num / 2) {
  alert("even number");
} else {
  alert("odd no");
}

//// chapter 9-11 task no 10
var check_temp;
check_temp = Number(prompt("Enter temperature"));
if (check_temp > 40) {
  alert("Very hot");
} else if (check_temp >= 30 && check_temp < 40) {
  alert("Noraml whether");
} else if (check_temp >= 20 && check_temp < 30) {
  alert("Cool whether");
} else if (check_temp >= 10 && check_temp < 20) {
  alert("To Cool outside");
}

//// chapter 9-11 task no 11
var num1, num2, operator, result;
num1 = Number(prompt("Enter value"));
num2 = Number(prompt("Enter value"));
operator = prompt("Enter opeartor");

if (operator === "+") {
  result = num1 + num2;
  alert(result);
} else if (operator === "-") {
  result = num1 - num2;
  alert(result);
} else if (operator === "+") {
  result = num1 * num2;
  alert(result);
} else if (operator === "/") {
  result = num1 / num2;
  alert(result);
} else if (operator === "%") {
  result = num1 % num2;
  alert(result);
}

// chapter 12-13 started
// chapter 12-13 task no 1
var ch;
ch = prompt("Enter num");
if (ch >= "65" && ch <= "90") {
  alert("Character is a capital letter");
} else if (ch >= "97" && ch <= "122") {
  alert("Character is a small letter");
} else if (ch >= "48" && ch <= "57") {
  alert("Character is a digit");
}

//// chapter 12-13 task no2
var num1, num2;
num1 = Number(prompt("Enter num for integer"));
num2 = Number(prompt("Enter num2 for integer"));
if (num1 > num2) {
  alert("Number 1 is larger");
} else if (num1 < num2) {
  alert("Number 2 is larger");
} else if ((num1 = num2)) {
  alert("Numbers are equals");
}

//// chapter 12-13 task no3
var num_1;
num_1 = Number(prompt("Enter num for integer"));

if (num_1 > 0) {
  alert("Number is positive");
} else if (num1 < 0) {
  alert("Number is negative");
} else if ((num1 = 0)) {
  alert("Numbers is zero");
}
//
//// chapter 12-13 task no 4
var value;
value = prompt("enter a character");
if (
  value === "a" ||
  value === "e" ||
  value === "i" ||
  value === "0" ||
  value === "u"
) {
  alert("Character is vowel");
} else {
  alert("false");
}

//// chapter 12-13 task n05
var password = "12345";
var check_pass = prompt("Enter your password");
if (password === check_pass) {
  alert("YOu enter a right password");
} else {
  alert("Sorry the password is wrong!");
}

//// chapter 12-13 task no 6
var greeting;
var hour = "13";

if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}

//// chapter 12-13 task no 7
var time;
time = Number(prompt("Enter time in 24 hours formate"));
if (time >= 0000 && time < 1200) {
  alert("Good Morning!");
}
if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
}
if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
}
if (time >= 2100 && time < 2359) {
  alert("Good  Night!");
}

// chapter 14-16 started
// chapter 14-16 task 1
var array1 = [];
var array_string = ["ABD", "Sarim", "Fahad"];
var array_num = [2, 8, 6];
var array_boolean = ["true", "false"];
var array_mixed = ["hassan", "hamza", 67, "true"];
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
for (var i = 1; i < qualification.length; i++) {
  document.write(i + "  " + qualification[i] + "<br>");
}

//// chapter 14-16  task no 2
var studentName = ["jazira", "ABD", "ABD"];
var marks = [300, 400, 350];
var percentage;
for (var i = 0; i < 3; i++) {
  console.log(studentName[i] + "  " + "score is " + marks[i]);
  percentage = (marks[i] / 500) * 100;
  console.log("Percentage is " + percentage);
  console.log("\n");
}

//// chapter 14-16  task no 3
var colorArray = ["red", "green", "blue", "pirple"];
var userColor = "";
alert("The color we have " + colorArray);
userColor = prompt("Color you want to add at the beginning ");
colorArray.unshift(userColor);
console.log(colorArray);
userColor = prompt("Color you want to add at the end");
colorArray.push(userColor);
console.log(colorArray);
colorArray.unshift("brown", "black");
console.log(colorArray);
colorArray.shift();
console.log(colorArray);
colorArray.pop();
console.log(colorArray);
i = prompt("Which color you want to delete enter the index no");
var j = prompt("how many color you want to delete?");
colorArray.splice(i, j);
console.log(colorArray);

//// chapter 14-16  task no 4
var studArray = ["320", "430", "120", "550"];
studArray.sort();
console.log(studArray);

//// chapter 14-16  task no 4
var cityArray = ["islambad", "karachi", "lohore", "kashmir"];
cityArray.splice(3, 10);
console.log(cityArray);

//// chapter 14-16  task no 5
var arr = ["This", "is", "a", "cat"];
console.log(arr.join(" "));

//// chapter 14-16  task no 6
var fifo = ["keyword", "mouse", "printer", "speaker"];
for (i = 0; i < 4; i++) {
  console.log("Out" + "\n" + fifo[i]);
}

//// chapter 14-16  task no 6
var fifo = ["keyword", "mouse", "printer", "speaker"];
for (i = 3; i >= 0; i--) {
  console.log("Out" + "\n" + fifo[i]);
}

//
// chapter 17-20 started

// Chapter 17 Task 2

var coun = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

document.write(coun);

//  Chapter 17 task 3

for (var input = 1; input <= 10; input++) {
  console.log(input);
}

//Chapter 17 Task 4

function table() {
  var n, i;

  var n = prompt("table you want of :");

  for (i = 1; i <= 15; i++) {
    console.log("\n" + n + "x" + i + "=" + n * i);
  }
}

table();

// Chapter 17 Task 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (index = 0; index < fruits.length; index++) {
  console.log("Element at index " + index + " is " + fruits[index]);
}

// Chapter 17-20 Task 6
//a)

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ,];
console.log(counting);

//b)
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reVers = counting.reverse();
console.log(reVers);

//c
var counting = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  17,
  18,
  19,
  20,
  ,
];
for (index = 0; index < counting.length; index++) {
  if (counting[index] % 2 == 0) {
    console.log(counting[index]);
  }
}
//d)
var counting = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  17,
  18,
  19,
  20,
  ,
];
for (index = 0; index < counting.length; index++) {
  if (counting[index] % 2 != 0) {
    console.log(counting[index]);
  }
}

//e)

var counting = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  17,
  18,
  19,
  20,
  ,
];
for (index = 0; index < counting.length; index++) {
  if (counting[index] % 2 == 0) {
    console.log(counting[index] + "k");
  }
}

// Chapter 17-20 task 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
  if (fruit == A[index]) {
    alert(fruit + "  is found at index  :   " + index + "  in our Bakery");
    break;
  } else if (fruit != A[index]) {
    alert(fruit + "  is found at index  :   " + index + "  in our Bakery");
    break;
  }
}

// Chapter 17-20 task 8

var A = [24, 53, 78, 91, 12];

console.log(
  "Array items  : " + A + "\n" + "Largest value is: " + Math.max.apply(null, A)
);

// Chapter 17-20 task 9
var A = [24, 53, 78, 91, 12];

alert(
  "Array items  : " + A + "\n" + "Smallest value is: " + Math.min.apply(null, A)
);

// Chapter 17-20 task 10

for (var i = 1; i <= 10; i++) {
  console.log(5 * i);
}