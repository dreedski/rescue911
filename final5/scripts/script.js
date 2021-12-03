/*
    Student Name: Drew Reed
    File Name: script.js
    Date: 11/17/2021
*/

//jQuery for hero image to consume the header window space
$(document).ready(function(){
	$('.hero').height($(window).height());
});

document.getElementByClassName("demo").onmouseover = function() {mouseOver()};
document.getElementByClassName("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementByClassName("demo").style.color = "red";
}

function mouseOut() {
  document.getElementByClassName("demo").style.color = "black";
}

/*
$(function() {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');
	
	$newItemButton.show();
	$newItemForm.hide();
	
	$('#showForm').on('click', function(){
		$newItemButton.hide();
		$newItemForm.show();
	});
	
	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $textInput.val();
		$('li:last').after('<li>' + newText + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});
*/

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good Evening';
} else if (hourNow > 12) {
	greeting = 'Good afternoon';
} else if (hourNow > 0) {
	greeting = 'Good Morning';
} else {
	greeting = 'Welcome';
}

Document.write('<h3>' + greeting + '</h3>');
