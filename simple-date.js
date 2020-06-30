/**
 * @Package: Simple-Date
 * @Author: Ricky Apuzzo III
 * @Version: 0.1
 * @BuildDate: 04/15/2012
 **/

var date = new Date();         //Create new date object;
var year = date.getFullYear(); //Get year, and set it to variable year;

window.addEventListener('load', function() { 
	document.getElementById('date').innerHTML = year;
});
