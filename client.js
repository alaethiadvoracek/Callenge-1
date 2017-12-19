console.log('js sourced');
var clicks = 0;
$(document).ready(function() { //wil run when DOM is loaded
$('#generate').on('click', append);//append text with button
$('#body').on('click', toggle());
});//end ready function



//delete button should remove container and contents
function append(){
  $('body').append('<div id ="div"></div');//append div
  clicks++;
  $('#div').append('<p id="ptag"></p>');//append <p>
  $('#ptag').text(clicks);//append click count to DOM as text
  //append two buttons to div
  $('#div').append('<button id="swap" type="button">Swap</button>');
  $('#div').append('<button id="delete" type="button">Delete</button>');
}//end append function
//generate button to have red background color
//swap button should change to yellow background color use toggle()
 function toggle() {
   $('#swap').css("background-color:", "yellow");
   $('#generate').css("backgroun-color:", "red");
 }//end toggle function
