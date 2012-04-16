/**
 * @Package: popSurvey
 * @Author: Ricky Apuzzo III
 * @Version: 0.1
 * @BuildDate: 04/15/2012
 * @Website: digitalatmospheres.com
 * @Email: rapuzzo@digitalatmospheres.com
 * @License: Free for public use!
 **/

//Get the current year;
var date = new Date();         //Create new date object;
var year = date.getFullYear(); //Get year, and set it to variable year;

$(window).load(function() {    //Append date to a span with class date on window load;
    $('span.date').append(year);
});
