//chapter no 49 to 52
//task no 1
//Create a signup form and display form data in your web page on submission.
function submit(){
  var firstName = document.getElementById('your_firstName');
  firstName = your_firstName.value;
  var lastName = document.getElementById('your_lastName');
  lastName = your_lastName.value;
  var emailAddress = document.getElementById('email_add');
  emailAddress = email_add.value;
  var pass = document.getElementById('password');
  pass = password.value;

document.write("<h1>"+ "Data you have entered " +"</h1>" +"<br>");
document.write("First name : " + firstName +"<br>");
document.write("Last name : " + lastName +"<br>");
document.write("Email : " + emailAddress +"<br>" );
document.write("Password : " + pass);

  console.log(firstName);
  console.log(lastName);
  console.log(emailAddress);
  console.log(pass);
}


//chapter no 49 to 52
//task no 2
// Suppose in your webpage there is content area in which you have entered your item details,
// but user can only see some details on first look. When user clicks on
// “Read more” button, full detail of that particular item will be displayed.

function readmore(){
  var readMore = "You can use your vehicle identification number (VIN) to find information about your car, like equipment specifications, the model year and even the factory where it was manufactured. Find your VIN on the driver's side dashboard. They've been 17 digits long since model year 1981 Car make and model are both terms used to identify and describe vehicles. Make is essentially a short term for an automaker, which means the company that makes the vehicle. ... Model is the specific type of vehicle produced by the automaker. For instance, a Camry is a model of Toyota, and a Civic is a model of Honda.";
 var para = document.getElementById("content-para");
 para.innerHTML = readMore;
   // var btn = document.createElement('button');
   // var textNode = createTextNode('show less');
   // btn.appendChild(textNode);

}

//chapter 49 to 52
//task no 3
var tableBtn = document.getElementById('btnInput');
var table = document.querySelector('table');

var nameInput = document.getElementById('name');
var lastInput = document.getElementById('lastName');
var countryInput = document.getElementById('country');

// btnAdd.addEventListener('click' ,function add(){
//   var name = nameInput.value;
//   var last = lastInput.value;
//   var country = countryInput.value;
//
//   let template =
//             "<tr>"+"<td>" + name  +"</td>"
//             +"<td>" + last  +"</td>"
//             +"<td>" + country  +"</td>"  +"</tr>";
//
//    table.innerHTML += template;
//
// });
  var count = 2
function addData(){

    var name = nameInput.value;
    var last = lastInput.value;
    var country = countryInput.value;


{
  count +=1;
  var row = table.insertRow(-1);
  row.insertCell(0).textContent = count;
  row.insertCell(1).textContent = name;
  row.insertCell(2).textContent = last;
  row.insertCell(3).textContent = country;

}


  var name = nameInput.value = "";
  var last = lastInput.value = "";
  var country = countryInput.value = "";
}

function deleteMe(){
  var valueDel = document.getElementById('deleteValue');
  var value = deleteValue.value;
  var row = table.deleteRow(value);
}

//chapter no 58 to 67
//task no 1
//DOM
var main = document.getElementById('mainContent');
console.log(main.childNodes);
var classElement = document.getElementsByClassName('render');
// var classHtml = classElement;
for(i=0 ; i<=3 ;i++)
{
  document.write(" " + classElement[i].innerHTML + "<br>");
}
//point 4 and point 5
var first_name = document.getElementById('first-name').value = "ABD";
var last_name = document.getElementById('last-name').value = "ABD";
var main_email = document.getElementById('email').value = "abc@gmail.com";


//part 2
//point 1
var form_content = document.getElementById('form-content');
document.write("<br>" + "Node type of id form-content is " +form_content.nodeType );
var main_lastName = document.getElementById('lastName');

//point 2
var child = main_lastName;
console.log(child);
document.write("<br>" + "Node type of id last name is " +main_lastName.nodeType );
document.write("<br>" + "Child node of id last name is "+ child.childNodes.firstChild.NodeValue);
console.log(main_lastName.childNodes);

//point 3
var child_node = child.NodeValue = "hassan ali ";
console.log(child_node);
document.write("<br>" + "Updating child of id last name is "+ child_node );

//point 4
var first_child = main.firstChild;
var last_child = main.lastChild;
document.write("<br>" + "first child of id main-content  " + first_child.innerHTML);
document.write("<br>" + "Last child of id main-content   " + last_child.innerHTML);
console.log(first_child);
console.log(last_child);

//point 5
// Get next and previous siblings of id “lastName”.
var next_sibling = main_lastName.nextSibling;
document.write("<br>" + "next sibling of id lastName " + next_sibling.innerHTML);
console.log(next_sibling);
var pre_sibling = main_lastName.previousSibling;
document.write("<br>" + "previous sibling of id lastName " + pre_sibling.innerHTML);
console.log(pre_sibling);


//point 6
//Get parent node and node type of element having id “email”
var parent_email = document.getElementById('email');
document.write("<br>" + "Node type of email is  " + parent_email.nodeType);
console.log(parent_email.parentNode);
document.write("<br>" + "Parent Node  of email is  " + parent_email.parentNode.tagName);