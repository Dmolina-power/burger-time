const buttons = () => {
    $("button[type=submit]").click(function(event) {
      event.preventDefault();
      let newBurger = $("#burger-type")
        .val()
        .trim();
      if (newBurger !== "") {
        $.post("/api/burger", { newBurger: newBurger }, function(res) {
          console.log(res);
          location.reload();
        });
      } else {
        $("#noBurger .modal-title").text(`Please add a Burger to Build!!`);
        $("#noBurger img").attr("src", "/assets/img/burger-build.jpeg");
        setTimeout(function() {
          $("#noBurger").modal("show");
        }, 100);
      }
    }); 
  
    $(".devourButton").click(function() {
      let btID = $(this).attr("data-id");
      $.ajax({
        url: "/api/burger",
        type: "PATCH",
        data: { ateID: btID }
      }).then(function(res) {
        // console.log(res);
        location.reload();
      });
    }); 
      
  
    $("#resetButton").click(function() {
        $.ajax({
          url: "/api/burger",
          type: "DELETE"
        }).then(function(res) {
            location.reload();
        });
    }); 
  }; 
          
  $(document).ready(function() {
    buttons();
    $(function() {
      $('[data-toggle="tooltip"]').tooltip({ placement: "right" });
    });
  }); 
      
  