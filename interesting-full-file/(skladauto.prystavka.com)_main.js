var active;
var count;
var timerId;

function slideStart(){
	timerId = setInterval(function() {
	  slide();
	}, 10000);
}
function slideRestart(){
	clearInterval(timerId);
	timerId = setInterval(function() {
	  slide();
	}, 10000);
}

function slide(){
	$(".dots:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('edge');
	if(active == count -1 ){
		active = 0;
		$("#show").css("margin-left", "-20px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
   		$(".card:eq("+active+")").addClass('edge');
	}
	else{
		active = active + 1;
		var calc = -20 - (active - 1)*170;
		$("#show").css("margin-left", calc+"px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	$(".dots:eq("+active+")").addClass('active');
   	$(".card:eq("+active+")").addClass('active');
}

function slideRight(){
	$(".dots:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('edge');
	if(active == count -1 ){
		active = 0;
		$("#show").css("margin-left", "-20px");
   		$(".card:eq("+active+")").addClass('edge');
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	else{
		active = active + 1;
		var calc = -20 - (active - 1)*170;
		$("#show").css("margin-left", calc+"px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	$(".dots:eq("+active+")").addClass('active');
   	$(".card:eq("+active+")").addClass('active');
   	slideRestart();
}

function slideLeft(){
	$(".dots:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('edge');
	if(active == 0 ){
		active = count - 1;
		var calc = -20 - (active - 1)*170;
		$("#show").css("margin-left", calc+"px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	else if(active == 1){
		active = 0;
		$("#show").css("margin-left", "-20px");
   		$(".card:eq("+active+")").addClass('edge');
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	else{
		active = active - 1;
		var calc = -20 - (active - 1)*170;
		$("#show").css("margin-left", calc+"px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	$(".dots:eq("+active+")").addClass('active');
   	$(".card:eq("+active+")").addClass('active');
   	slideRestart();
}

function slideto(i){
	$(".dots:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('active');
   	$(".card:eq("+active+")").removeClass('edge');
	active = i;
	if(active == 0 ){
		$("#show").css("margin-left", "-20px");
   		$(".card:eq("+active+")").addClass('edge');
		$("#showhtml").css("margin-left", (-100*active)+"%");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	else{
		var calc = -20 - (active - 1)*170;
		$("#show").css("margin-left", calc+"px");
		$("#showhtml").css("margin-left", (-100*active)+"%");
	}
	$(".dots:eq("+active+")").addClass('active');
   	$(".card:eq("+active+")").addClass('active');
   	slideRestart();
}


$( document ).ready(function() {
    count = $('.card').length;
    active = 1;
    for (var i = 0; i < count; i++) {
    	$( "#dots" ).append( "<div class='dots' onclick='slideto("+i+");'></div>" );
    }
   	$(".dots:eq(1)").addClass('active');
   	$(".card:eq(1)").addClass('active');
	$("#showhtml").css("width", (count*100)+"%");
	$("#showhtml").css("margin-left", (-100*active)+"%");
   	slideStart();
});
