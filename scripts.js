$(document).ready(function(){


//main
	$(".title").on("click", function(){
	  $(".introduction").show();

	  $(".blackmirrortext").hide();
	  $(".policetext").hide();
	  $(".lstext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");

	  $(".text").scrollTop(0);
	});

	$(".livingsurviving").on("click", function(){

	  $(".livingsurviving").css("background-blend-mode", "multiply");

	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");


	  $(".lstext").show();
	  $(".introduction").hide();
	  

	  $(".blackmirrortext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	  $(".text").scrollTop(0);
	});

	$(".blackmirrorbody").on("click", function(){
	  $(".blackmirrorbody").css("background-blend-mode", "multiply")

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;

	  $(".blackmirrortext").show();
	  $(".introduction").hide();

	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	  $(".text").scrollTop(0);
	});

	$(".police").on("click", function(){
	  $(".police").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;

	  $(".policetext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	  $(".text").scrollTop(0);
	});

	$(".notguilty").on("click", function(){
	  $(".notguilty").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;

	  $(".ngtext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".capitaltext").hide();
	  $(".testotext").hide();

	  $(".text").scrollTop(0);
	});

	$(".capital").on("click", function(){
	  $(".capital").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;

	  $(".capitaltext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".testotext").hide();

	  $(".text").scrollTop(0);
	});

	$(".testojunkie").on("click", function(){
	  $(".testojunkie").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");;

	  $(".testotext").show();
	  $(".introduction").hide();

	  $(".blackmirrortext").hide();
	  $(".lstext").hide();
	  $(".policetext").hide();
	  $(".ngtext").hide();
	  $(".capitaltext").hide();

	  $(".text").scrollTop(0);
	});

});