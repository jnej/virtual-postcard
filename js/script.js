$(document).ready(function() {
  $("formOne").submit(function(event) {
    var recipNameInput =$("input#recipName").val();
    var yourNameInput =$("input#yourName").val();
    var addressInput =$("input#addressName").val();
    $(".recipName").text("bop!");
    $(".yourName").text("bop!");
    $(".address").text("bop!");

    $("#postcard").toggle();

    event.preventDefault();
  });
});
