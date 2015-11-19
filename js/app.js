function makeProductLayout (image, description) {
	var productContainer = $("<div>").addClass("col-md-3");

	var productImage = $("<img>").attr("src",image);

	var productDescription = $("<p>");
	productDescription.html(description);

	var productLikeButton = $("<a>").addClass("btn btn-primary");
	var productBuyButton = $("<a>").addClass("btn btn-info");

	productContainer.append(productImage, productDescription, productLikeButton, productBuyButton);

	return productContainer;
}


