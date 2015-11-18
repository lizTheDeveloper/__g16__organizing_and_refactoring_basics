
var productContainer = $("<div>").addClass("col-md-3");

var productImage = $("<img>").attr("src","http://placehold.it/200/200");

var productDescription = $("<p>");

var productLikeButton = $("<a>").addClass("btn btn-primary");
var productBuyButton = $("<a>").addClass("btn btn-info");

productContainer.append(productImage, productDescription, productLikeButton, productBuyButton);

$("#productRow").append(productContainer);