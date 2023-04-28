$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#video").html("<source src='"+ $("#url").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("video");
      ply.play();
    });
  });


$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#videoonce").html("<source src='"+ $("#urlonce").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("videoonce");
      ply.play();
    });
  });

$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#videomigrante").html("<source src='"+ $("#urlmigrante").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("videomigrante");
      ply.play();
    });
  });

$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#videounam").html("<source src='"+ $("#urlunam").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("videounam");
      ply.play();
    });
  });

$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#video21").html("<source src='"+ $("#url21").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("video21");
      ply.play();
    });
  });


$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#video22").html("<source src='"+ $("#url22").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("video22");
      ply.play();
    });
  });