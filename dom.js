// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

// <img alt="Google" height="95" src="/images/srpr/logo11w.png" width="269" id="hplogo" onload="window.lol&amp;&amp;lol()" style="padding-top:112px">

var googlelogo = document.getElementById('hplogo');
googlelogo.src = 'http://4.bp.blogspot.com/-_Vn7jKys1_s/T9VszPritmI/AAAAAAAADQc/qMbTgrRxf1c/s1600/yahoo-logo-3.jpg';
var searchbutton = document.getElementById('gbqfsa')
searchbutton.innerHTML = "Yahoo!";


// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.


