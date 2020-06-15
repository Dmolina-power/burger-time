const buttons = () => {
    $("button[type=submit]").click(function(event) {
      event.preventDefault();
      let newBurger = $("#burger-type")
        .val()
        .trim();
      if (newBurger !== "") {
        $.post("/api/burger/", { newBurger: newBurger }, function(res) {
          console.log(res);
          location.reload();
        });
      } 
    }); 
  
    $(".devourButton").on("click", function(event) {
      event.preventDefault();
      let id = $(this).attr("data-id");
      $.ajax({
        url: "/api/burger/" + id,
        type: "PUT",
      }).then(function(res) {
        console.log(res);
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
     
