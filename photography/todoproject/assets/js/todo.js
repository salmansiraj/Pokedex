// crosses out todoes from clicks
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// clicking span to delete task 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//take new val from input
		var todoText = $(this).val();
		$(this).val("");
		//making new bullet in list 
		$("ul").append("<li> <span><i class = 'fa fa-trash'></i> </span>" + todoText + "</li>")
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
})