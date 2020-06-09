$("form").submit(function(e) {

	e.preventDefault();

});
$(document).ready(function(){
//$("#myform" ).remove();
for(var i = 1 ; i < 6; i++){
$('article').append('<div>hello '+i+'</div>');
$('article >div').addClass("box")
}

$("input#msg").val("Search for...")

	$('a[href^="http://"]').each(function(){ 
		var oldUrl = $(this).attr("href"); // Get current url
		var newUrl = oldUrl.replace("http://", "https://"); // Create new url
		$(this).attr("href", "www.codefactory.wien"); // Set herf value
	});
});