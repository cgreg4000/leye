$("#res-form").on("submit", function (e) {
    e.preventDefault();
    $("#res-form").hide();
    $("#customer-form").show();
});

$("#customer-form").on("submit", function (e) {
    e.preventDefault();
    $("#res-heading").hide();
    $("#customer-form").hide();
    $("#success").show();
});