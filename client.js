console.log('js sourced');
var clicks = 0;
$(document).ready(function() { //wil run when DOM is loaded
$('#generate').on('click', append);//append text with button
$('body').on('click', '.swap', toggleClass);
$('body').on('click', '.delete' ,removeDiv);
});//end ready function


function append(){
  var $div = $('<div class= "red"></div');
  clicks++;
  console.log(clicks);
  $div.append('<p class ="ptag">' + clicks + '</p>');//append <p> anf click count to DOM
  //append two buttons to div
  $div.append('<button class="swap" type="button">Swap</button>');
  $div.append('<button class="delete" type="button">Delete</button>');
  $('body').append($div);
}//end append function
//generate button to have red background color (done in CSS)
//swap button should change to yellow background color use toggle()
function toggleClass(){
    $(this).parent().toggleClass('yellow');
}//end toggle colors fuction
//delete button should remove container and contents
function removeDiv(){
  $(this).parent().remove();
} //end remove div
