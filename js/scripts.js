$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
        const nameInput = $("input#name").val();
        const addressInput = $("input#address").val();
        const dateInput = $("input#date").val();
        
        $(".name").text(nameInput);
        $(".address").text(addressInput);
        $(".date").text(dateInput);
     
        const Amount = $("#Amount").val();
        $(".Amount").text(Amount);


        // const jewelry = $("input:radio[name=jewelry]:checked").val();
        // $("#radio").text(jewelry);


        // $("#Receipt").show();
    });
});