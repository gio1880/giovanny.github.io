function w3_open() {
    document.getElementById("menuBar").style.display = "block";
    $("#openIcon").hide();
    $(".portfolioImgs").css("position","inherit");
    $(".portfolioImgs").hover(function(){
        $(this).css("opacity",0);
    });
    $("#portfolioContainer").hide();
}

function w3_close() {
  document.getElementById("menuBar").style.display = "none";
  $("#openIcon").show();
  $(".portfolioImgs").css("position","relative");
  $("#portfolioContainer").show();
}