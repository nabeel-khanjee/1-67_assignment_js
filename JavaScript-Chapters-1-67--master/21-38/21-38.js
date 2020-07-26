// Chapter 21-25 Task 1

var firstName = " ABD";
var lastName = " ABD ";
var fullName = firstName + lastName;
alert(fullName);

// Chapter 21-25 Task 2

var favouritePhone = prompt("Your favourite Mobile Phone ? :");
alert(
  "My favorite Phone is :  " +
    favouritePhone +
    "\n Length of string : " +
    favouritePhone.length
);

// Chapter 21-25 Task 3

var Country = "Pakistani";
alert("string  : " + Country + "index of n : " + Country.indexOf("n"));

// Chapter 21-25 Task 4
var msg = "Hello World";
alert("String :" + msg + "index of l is  :" + msg.indexOf(msg.length - 1));

// Chapter 21-25 Task 5

var country = "pakistani";
alert("3rd index is :" + country.charAt(3));

// Chapter 21-25 Task 6

var firstName = "ABD";
var lastName = " ABD";
alert(firstName.concat(lastName));

// Chapter 21-25 Task 7

var city = "Hyderabad";

alert(
  "City:" +
    city +
    "\n After Replacement : " +
    city.replace("Hyderabad", "Islamabad")
);

// Chapter 21-25 Task 8

var message =
  "Ali and Sami are best friends. They play cricket and football together";

alert(
  "Before Replacing 'and' " +
    message +
    "After Replacing 'and' to '&' " +
    message.replace(/and/g, "&")
);

// Chapter 21-25 Task 9

var string1 = "472";
var string2 = Number("472");
alert(
  "value :" +
    string1 +
    " Type " +
    typeof string1 +
    "\n Value :" +
    string2 +
    " Type:" +
    typeof string2
);

//Chapter 21-25 Task 10

var msg = prompt("any word : ");
alert(msg.toUpperCase());

//Chapter 21-25 Task 11

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write(sentence.join(" "));
  return sentence;
}

titleCase("javascript");

//Chapter 21-25 Task 12

var num = 35.36;
var str = num.toString() * 100;
alert(str, str.typeof());

alert("Number : " + num + "\n Result : " + num.toString());

//Chapter 21-25 Task 13

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
  if (fruit == A[index]) {
    alert(fruit + "  is available at index  :   " + index + "  in our Bakery");
    break;
  } else if (fruit != A[index]) {
    alert(fruit + "  is available at index  :   " + index + "  in our Bakery");
    break;
  }
}

//Chapter 21-25 Task 14
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var checkForSpecialChar = function (string) {
  for (i = 0; i < specialChars.length; i++) {
    if (string.indexOf(specialChars[i]) > -1) {
      return true;
    }
  }
  return false;
};

var userName = prompt("Type code : ");
if (checkForSpecialChar(userName)) {
  alert("Please Enter a  Valid Username");
} else {
  alert("Valid Password");
}
//Chapter 21-25 Task 15

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
  if (fruit == A[index]) {
    alert(
      fruit + "  is found at index  :   " + A.indexOf(fruit) + "  in our Bakery"
    );
    break;
  } else if (fruit != A[index]) {
    alert(fruit + "  is not found  in our Bakery");
    break;
  }
}

//Chapter 21-25 Task 16

var university = "University of Karachi";

var spuni = university.split("");

alert(spuni);

//Chapter 21-25 Task 17

var country = "Pakistan";

var ans = country.slice(-1);

alert(ans);

//Chapter 21-25 Task 18

var temp = "The quick brown fox jumps over the lazy dog";
var ctemp = temp.toLowerCase();
var count = (ctemp.match(/the/g) || []).length;
console.log(count);

// Chapter 31-34 Task 1
var today = new Date();

console.log(today);

// Chapter 21-25 Task 2

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var now = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById("output");
console.log(thisMonth);

if (output.textContent !== undefined) {
  output.textContent = thisMonth;
} else {
  output.innerText = thisMonth;
}


// chapter no 26 to 30
// task no 1
let pos_num = Number(prompt("Enter a number"));
console.log(pos_num);
let num = Math.round(pos_num);
console.log(num);
num = Math.floor(pos_num);
console.log(num);
num = Math.ceil(pos_num);
console.log(num);

//task no 2
let neg_num = Number(prompt("Enter a negative number"));
console.log(neg_num);
let num1 = Math.round(neg_num);
console.log(num1);
num = Math.floor(neg_num);
console.log(num1);
num = Math.ceil(neg_num);
console.log(num1);


//task no 3
let abs_num = Number(prompt("Enter a  number"));
let num_st = Math.abs(abs_num)
console.log(num_st);


//task no 4
//random function
let ran_value = Math.random()*6 +1;
let ran_floor = Math.floor(ran_value);
let ran_floor1 = Math.floor(ran_value);
document.write(`Random dice value  ${ran_floor}`);

ran_value = Math.random()*6 +1;
ran_floor = Math.floor(ran_value);
document.write(`Random dice value  ${ran_floor}`);

//task no 5
//coin program
let coin_flip = Math.random() * 2;
let coin = Math.floor(coin_flip);
console.log(coin);
if(coin == 1)
{
  document.write("head wins");
}
else if(coin == 0)
{
  document.write("Tail wins");
}


//task no 6
// 1 to 100 Number
let ran_num = Math.random()*101;
let num_fl = Math.floor(ran_num);
console.log(`
  Random no between 1 to 100 : ${num_fl}
  `);


//task no 7
//weight program
let weight = Number(prompt("Enter your weight in kilogram"));
document.write(`The weight of the user is ${weight} kilogram`);

//task no 8
//secret number game
let scret_num = Math.floor(Math.random()*11);
let user_num = Number(prompt("Enter a number between 1 to 10"));
if(scret_num == user_num)
{
  document.write("<br>" + "Congratation you win");
}
else {
  document.write("<br>" +"Please try again");
}



// Chapter 31-34 Task 3

var today = new Date();
var day = today.getDay();
var daylist = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"];
console.log("Today is : " + daylist[day] + ".");

// Chapter 31-34 Task 4
var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];

if (daylist == "Thursday") {
  console.log("Today is : " + "Funday");
} else if (daylist == "Saturday") {
  console.log("Today is : " + "Funday");
} else if (day != "Saturday" && day != "Sunday") {
  console.log("Today is : " + daylist[day]);
}

// Chapter 31-34 task 5

var GivenDate = '2020-06-15';
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if(GivenDate > CurrentDate){
    alert('First Fifteen Days of Month');
}else{
    alert('Last Fifteen Days of Month');
}

// Chapter 31-34 task 6


// var d = ('1970-01-144933');
// var currentd = new Date();

// var total = currentd - d;

// alert(total);



//task no 7
// check am or pm
dateNow = new Date();
hour = dateNow.getHours();
if(hour >=0 && hour <=12)
{
  alert("It's AM");
}
else{
  alert("It's PM");
}

//task no 8
//last date of the year 2020
var latertDate = new Date(2020,11,31);
alert("Later date :" +latertDate);

//task no 9
var ref_date = new Date(2020,04,24);
var ref_DateNow = new Date(2015,10,21);
var month = ref_DateNow.getMonth();
var ref_month = ref_date.getMonth();
var ref_day = ref_date.getDate();
var diff_month = month - ref_month;
console.log(diff_month);

for(var i = 1 ; i<=diff_month; i++)
{

  for(var j = 1 ; j<=30;j++)
  {
    var count;
     count =+ j;
     console.log(count);

  }
  dateD= 0;
  var result_count =+ count;
  result_count *=i;
  result = result_count-14;
  var total_result = 1825 - result;
  console.log(total_result);
}
alert(total_result + "  days have passed since 1st, Ramdam  2015");
console.log("Total no of days are " + total_result);


//task no 10
//millsecond
dateNow = new Date();
var date_mill = dateNow.getMilliseconds();
var pre_date = new Date("11/05/2015 16:00:00");
var pre_mill =  pre_date.getMilliseconds();
var time = date_mill + pre_mill;
console.log(date_mill);
console.log(time);

//task no 11
// reset the date object an hour
dateNow = new Date();
date_d = dateNow.getDate();
date_m = dateNow.getMonth();
var date_y = dateNow.getYear();
var hour = dateNow.getHours();
var hour_s = hour - 1;
var backD = new Date(date_y, date_m, date_d, hour_s);
alert("Current date " + dateNow + "\n" + "1 hour back it was : " + backD);

//task no 12
//current date to 100 years back
var dateNow = new Date();
var date_d = dateNow.getDate();
var date_m = dateNow.getMonth();
var backDate = new Date(1920, date_m, date_d);
alert("Current date " + dateNow + "\n" + "100 years back it was : " + backDate);


//task no 13
//calculate user age
// var userAge = Number(prompt("Enter your age "));
// var todayDate =new Date();
// function dateyear()
// {
// var dob_entry = 21/10/1998;
//
// var dob_asdate = new Date(year, month, day);
// var today = new Date();
// var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
// var age = (mili_dif / (1000 * 3600 * 24 * 365.25));
// within_age_range=(14<age & age<24);
//
// alert(age);
// };
// document.write("<br>" +dateyear());

//task no 14
// k-electric bill
var customerName = "xyz";
var month = "feb";
var numberOfUnit = 410;
var chargesPerUnit = 16;
var latePayment = 350;
var netPayment = numberOfUnit * chargesPerUnit;
var grossPayment = netPayment + latePayment;
document.write("</h1> " + "K-Electric Bill " + "</h1>");
document.write("<br>" + "Customer Name : " + customerName);
document.write("<br>" + "Customer Month : " + month);
document.write("<br>" + "number Of Unit : " + numberOfUnit);
document.write("<br>" + "charges Per Unit : " + chargesPerUnit);
document.write("<br>" + "late Payment : " + latePayment);
document.write("<br>" + "Net Payment (in due date): " + netPayment);
document.write("<br>" + "Gross Payment (after due date): " + grossPayment);


//chapter no  35 to 38
//task no1
//display current date and time
function currentDate(){
  let store_time =  Date();
  document.write("<br>" + store_time);
}
 currentDate();

//task no 2
//first and last nmae from the user function
function fullName(){
  let name = prompt("Enter your first name");
  let lastName = prompt("Enter your first name");
  document.write( "<br>" + "Welcome  " + name + lastName);
}

fullName();


//task no 3
// sum of two numbers
function add(sum_num1,sum_num2){
   sum_num1 = Number(prompt("enter no to add"));
   sum_num2 = Number(prompt("enter no to add"));
  let total = sum_num1 + sum_num2;
  document.write("<br>"+"Sum of numbers are " + total);
}
add();

//task no 4
//calculator
function calacula(num1,num2,operator){
  if(operator == "+")
  {
    return num1+num2;
  }
  else if(operator == "-")
  {
    return num1-num2;
  }
  else if(operator == "/")
    {
      return num1/num2;
    }
  else if(operator == "*")
    {
      return num1*num2;
    }
  else
  {
    alert("Sorry something wrong!");
  }
}

document.write("<br>" + "RESULT: " +calacula(5,8,"+"));

//task no 5
//square function
function square(a){
  return a*a;
}
document.write("<br>" + "RESULT OF SQUARE: " + square(5));


//task no 6
//factorial of a number
function factorial(fact)
{
  let store = fact;
     console.log(store);
for(var i = 1; i <store; ++i)
   {
       fact *= i;
        console.log(fact);
   }
return fact;
   console.log(fact);
}
document.write("<br>" + "RESULT OF FACTORIAL: " + factorial(5));

//task no 7
//counting program
function counting(){
  let start_num = Number(prompt("Enter the starting number to start counting"));
  let last_num = Number(prompt("Enter the last number to end counting"));
  document.write( "<br>" + "Counting from " + start_num + " to " +last_num +"<br>");
  for(i=start_num;i<=last_num;i++)
  {
    document.write(i +"<br>");
  }
}
counting();

//task no 8
//nested function of hypotenuse
function hypotenuse(a, b) {
              function square(x) { return x*x; }
              let store_h = Math.sqrt(square(a) + square(b));
              return store_h;
              console.log(store_h);
           }
document.write("<br>" + "Hypotenuse :" + hypotenuse(5,4));


//task no 9
// area of a rectangle.
function areaOfRect(width,height){
  var area;
  area = width*height;
  return area;
}
document.write("<br>" + "Area of rectangle : " + areaOfRect(5,8));


//task no 10
unction palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return 'its not palindrome';
    }
  }
  return 'its palindrome';
 }
  palindrome(prompt(''));


//task no 11
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
}

document.write(titleCase('the quick brown fox'));

//task no 12
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}
document.write("<br>" +longestWord('Web Development Tutorial'));

//task no 13

function char_count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'));

//task no 14
function calcCircumference(radius)
{
  var circumference = 2*3.142*radius;
  return Math.ceil(circumference);
}

document.write("<br>" + "circumference of the circle :" +calcCircumference(5));

//b)
function calcArea(r)
{
  var circle_area = 3.142*r;
  return Math.ceil(circle_area);
}
document.write("<br>" + "area of circle is :"+ calcArea(5));
