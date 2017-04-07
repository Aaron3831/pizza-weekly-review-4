function Pizza (topping1, topping2, topping3, topping4, sauce, lms) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.sauce = sauce;
  this.large = large;
  this.medium = medium;
  this.small = small;
}
Pizza.prototype.ingredients = function () {
  var topping1 = { name: "Cheese", price: 2.00 };
  var topping2 = { name: "Pepperoni", price: 2.00 };
  var topping3 = { name: "Olives", price: 2.00 };
  var topping4 = { name: "Artichokes", price: 2.00 };
  var sauce = { name: "Tomato Sauce", price: 2.00 };
  var large = { name: "large", price: 6.00 };
  var medium = { name: "medium", price: 4.00 };
  var small = { name: "small", price: 2.00 };

  var pizzaIngredients = { name: "Make me a Pizza", toppings: [cheese, pepperoni, olives, artichokes, tomato sauce, large, medium, small], price: [2.00, 2.00, 2.00, 2.00, 2.00, 6.00, 4.00, 2.00] };
};
Pizza.prototype.receipt = function () {
  var topping1 = { name: "Cheese", price: 2.00 };
  var topping2 = { name: "Pepperoni", price: 2.00 };
  var topping3 = { name: "Olives", price: 2.00 };
  var topping4 = { name: "Artichokes", price: 2.00 };
  var sauce = { name: "Tomato Sauce", price: 2.00 };
  var large = { name: "large", price: 6.00 };
  var medium = { name: "medium", price: 4.00 };
  var small = { name: "small", price: 2.00 };

  var totalPrice = { name: "Receipt", price: }
};

// UI
$(document).ready(function() {
  $("form#toppingList").sibmit(function(event)
  event.preventDefault();


  });
});
