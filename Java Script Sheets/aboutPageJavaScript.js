function w3_open() {
  document.getElementById("menuBar").style.display = "block";
  $("#openIcon").hide();
}

function w3_close() {
  document.getElementById("menuBar").style.display = "none";
  $("#openIcon").show();
}