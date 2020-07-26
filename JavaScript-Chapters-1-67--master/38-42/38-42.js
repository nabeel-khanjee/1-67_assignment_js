               // Chapter 38-42

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 

function Add(){
    a = 3 ;
    b = 4 ;
    c = a + b ;
    return c ;
}

alert(Add());

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 

function isLeapYear() { 
    var year= Number(prompt('Year ? ')); 


    var leapYear    =   (year % 100 === 0) ? (year % 400 === 0) 
                             : (year % 4 === 0); 
                             return leapYear ;
} 
alert(isLeapYear());

/* 3. If the lengths of the sides of a triangle are denoted by a, b, and c,
  then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 , Calculate area of triangle using 2 functions  */
  
  function S(){
    a = 5;
    b = 3;
    c = 3;
    S = (a + b + c) / 2 ;
    areaOfTriange();
  
}

function areaOfTriange(){
 
    var areaOfTriange = S * (S - a) * (S - b) * (S - c) ;
    alert(areaOfTriange);
}

S();

/* 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage.
 Call those functions from mainFunction and display result in mainFunction */

function main (maths,physics,computer){

function average(){

var average = (maths + physics + computer) / 3 ;
return average ;

}

function percentage(){

  var percentage = (maths + physics + computer) / 300 * 100 ;
  return percentage ;
    
}

average();

percentage();

alert("percentage : " + percentage()+'%' + " \n Average : " + average());

}

console.log(main(90,70,100));

/*5. You have learned the function indexOf.Code your own custom function that will perform the same functionality. 
You can code for single character as of now. */




/* 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. */

var strings = ["bongo drums", "guitar", 
  "flute", "double bass", "xylophone","piano"];                          
if(strings.length<=25){
   string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

  console.log(string); 

} else {
    alert ('string must be less than 25');
}



/* 7. Write a function with switch statement to count the number of occurrences of any two 
vowels in succession in a line of text. For example, in the sentence */

function vowel_count(str1)
{
  var vowel_list = 'aeAE';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("hey.. How are you?"));




/* 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert
 and print this distance in meters, feet, inches and centimeters. */


function distance(){
    var distance = Number(prompt(' Distance between Two Cities in Km : ')) ;
    alert(' Distance in Meters : ' + distance/1000 + ' \n Distance in foot' + distance/3280.84 + '\n in inches : ' + distance/39370.1 + ' \n in centimeters : '+ distance/100000)

}

distance();



 /* 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours.
  Assume that employees do not work for fractional part of an hour. */

  var hoursWorkedInAWeek = Number(prompt('Total hours Employ worked in a week : '));
  var additionalHours = 40 - hoursWorkedInAWeek ;
  if(hoursWorkedInAWeek>40){
  var payment = additionalHours * -12.00 ;
  alert(payment);
  }else{
    alert('NO ADDITIONAL PAYMENT BECAUSE YOU WORKED UNDER 40 HOURS');
  }


  /* 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
   keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. */
 
var amount = Number(prompt("Enter Amount to Withdraw : "));

alert("Required Notes of 100 is : "+amount/100 + "\n Required notes of 50 is : "+(amount % 100) / 50 + "\n Required notes of 10 is : "+ (((amount%100) % 50) / 10 ) + "\nAmount still remaining is : " + (((amount % 100) % 50) % 10)); 
