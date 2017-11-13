$(document).ready(function(){

	$(".title").on("click", function(){
	  $(".introduction").show();

	  $(".blackmirrortext").hide();
	  $(".policetext").hide();
	  $(".lstext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();
	});

	$(".livingsurviving").on("click", function(){
	  $(".lstext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	});

	$(".blackmirrorbody").on("click", function(){
	  $(".blackmirrortext").show();
	  $(".introduction").hide();

	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();
	});

	$(".police").on("click", function(){
	  $(".policetext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();
	});

	$(".notguilty").on("click", function(){
	  $(".ngtext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();
	});

	$(".capital").on("click", function(){
	  $(".capitaltext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".testotext").hide();
	});

	$(".testojunkie").on("click", function(){
	  $(".testotext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	});

});