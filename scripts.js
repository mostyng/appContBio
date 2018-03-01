$(".livingsurviving").click(function() {
		$('html, body').animate({
			scrollTop: $("#livingsurviving_link").offset().top -50
		}, 600);
	});

$(".blackmirrorbody").click(function() {
		$('html, body').animate({
			scrollTop: $("#blackmirrorbody_link").offset().top -50
		}, 600);
	});

$(".police").click(function() {
		$('html, body').animate({
			scrollTop: $("#police_link").offset().top -50
		}, 600);
	});

$(".notguilty").click(function() {
		$('html, body').animate({
			scrollTop: $("#notguilty_link").offset().top -50
		}, 600);
	});

$(".capital").click(function() {
		$('html, body').animate({
			scrollTop: $("#capital_link").offset().top -50
		}, 600);
	});

$(".testojunkie").click(function() {
		$('html, body').animate({
			scrollTop: $("#testojunkie_link").offset().top -50
		}, 600);
	});

$(".title").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);

		$(".livingsurviving").css("background-blend-mode", "normal");
		$(".blackmirrorbody").css("background-blend-mode", "normal");
		$(".police").css("background-blend-mode", "normal");
		$(".notguilty").css("background-blend-mode", "normal");
		$(".capital").css("background-blend-mode", "normal");
		$(".testojunkie").css("background-blend-mode", "normal");
	});

	$(".livingsurviving").on("click", function(){

	  $(".livingsurviving").css("background-blend-mode", "multiply");

	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");
	});


	$(".blackmirrorbody").on("click", function(){
	  $(".blackmirrorbody").css("background-blend-mode", "multiply")

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;
  });

	$(".police").on("click", function(){
	  $(".police").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;
	});


	$(".notguilty").on("click", function(){
	  $(".notguilty").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;
	});

	$(".capital").on("click", function(){
	  $(".capital").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".testojunkie").css("background-blend-mode", "normal");;
	  });

	$(".testojunkie").on("click", function(){
	  $(".testojunkie").css("background-blend-mode", "multiply");

	  $(".livingsurviving").css("background-blend-mode", "normal");
	  $(".blackmirrorbody").css("background-blend-mode", "normal");
	  $(".police").css("background-blend-mode", "normal");
	  $(".notguilty").css("background-blend-mode", "normal");
	  $(".capital").css("background-blend-mode", "normal");;
	  });

