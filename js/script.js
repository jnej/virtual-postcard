$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipNameInput =$("input#recipName").val();
    var yourNameInput =$("input#yourName").val();
    var addressInput =$("input#address").val();

    $(".recipName").text(recipNameInput);
    $(".yourName").text(yourNameInput);
    $(".address").text(addressInput);

    $("#postcard").show();
    event.preventDefault();
  });
});
