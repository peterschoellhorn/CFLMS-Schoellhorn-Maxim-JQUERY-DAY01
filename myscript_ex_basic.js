/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
//$("p").css({"color": "blue"})

// the p element with an ID of "intro"
//$("p#intro").css({"color": "yellow"});

// all elements with a class of "note"
//$(".note").css({"color": "blue"});

// all DIV elements with a class of note
//$("div.note").css({"color": "yellow"});

// all p elements in the article element
//$("article p").css({"color": "yellow"});

// the last element in any section which is a p tag
//$("p:last-of-type").css({"color": "yellow"});

// the first paragraph on the page
//$("article p:first-child").css({"color": "yellow"});

// all p elements which have a link
//$("p:has(a)").css({"color": "yellow"});

// the second li within nested ul element
//$("li li:nth-child(2)").css({"color": "yellow"});

// every second and third p element
$("p:nth-child(2),p:nth-child(3)").css({"color": "yellow"});
//$("p:nth-child(3)").css({"color": "yellow"});

//var newDiv = $("<div>a</div>")


//for(var i = 1 ; i < 6; i++){

//$("article").append('<div>hello'+i+'</div>');
//}