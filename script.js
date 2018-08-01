var full_Name = "s1";
var about_Me = "s2";
var portfolio_ = "s3";
var contact_ = "s4";
var RANDOM_FACTS = "s5";
var activeSlideId = full_Name;

$("#tabMenu li").click(function(){
    var tabOption = $(this).attr("id");
    $("#"+activeSlideId).removeClass("active");
    switch(tabOption) {
    case "t1":
        activeSlideId="s1";
        break;
    case "t2":
        activeSlideId="s2";
        break;
    case "t3":
        activeSlideId="s3";
        break;
    case "t4":
        activeSlideId="s4";
        break;
    }
    $("#"+activeSlideId).addClass("active");
  
});