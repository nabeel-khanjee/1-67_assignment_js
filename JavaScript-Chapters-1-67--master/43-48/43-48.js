//   3. Display  students records in table and each row should contain a delete button. 
//If you click on a button to delete a record, entire row should be deleted.  

window.onload=function() {
    var button = document.getElementById("submitButton");
    button.onclick = addItem;
  }   
  
  function addItem() {
          var textInput = document.getElementById("item");  //getting text input
          var text = textInput.value;   //getting value of text input element
          var ul = document.getElementById("ul");  //getting element <ul> to add element to
          var li = document.createElement("li");  //creating li element to add
          li.innerHTML = text;    //inserting text into newly created <li> element
          li.onclick = function() {this.parentNode.removeChild(this);}
      if (ul.childElementCount == 0) {  //using if/else statement to add items to top of list
          ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
      }
      else {
          ul.insertBefore(li, ul.firstChild);
      }
  }
  
// 5. Show a counter in browser. Counter should increase on click 
//on increase button and decrease on click on decrease button. And show updated counter value in browser. 
  var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
}
// 43-48 task 4
function upDate(previewPic){
 
    document.getElementById('image').innerHTML = previewPic.alt;
   
    document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
    
    
    
      }
  
      function unDo(){
       
  document.getElementById('image').innerHTML = "Hover over an image below to display here";
        document.getElementById('image').style.backgroundImage = "url('')";
      
      
      /* the function is going to change the image back to the original one and the text back to the one in div orginially */
          
      }