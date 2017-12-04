$(document).ready(() => {
  $("#progress-bar").on("slide", function(slideEvt) {
    var project_name = $("#project-name").val();
    var phase = data[project_name][slideEvt.value];
    $("#subtitle").text(phase["subtitle"]);
	  $("#content-text").text(phase["content"]);
    $("#image").attr('src', phase["image"]);
  });

  $("#peashooter").hover (
    function() {
      var p_position = $("#peashooter").position();
      console.log("Top: " + p_position.top);
      console.log("Left: " + p_position.left);
      var p_width = $("#peashooter").innerWidth();
      console.log("Width: " + p_width);
      var posL = parseInt(p_position.left) + p_width;
      console.log("New pos_L: " + posL);
      var posT = p_position.top;
      var pea = $("<img class='pea-img' id='pea' src='images/pea.png' alt='pea'></img>");
      $("#peashooter").append(pea);
      pea.animate({"left": $(window).width()}, 3000);
    }, function() {
      $("#peashooter").find("img:last").remove();
    }
  );
});
