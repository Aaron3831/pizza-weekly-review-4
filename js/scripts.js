function Pizza (topping1, topping2, topping3, topping4, pizzaSize) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.pizzaSize = pizzaSize;
  this.combo = [];
}
// Pizza.prototype.ingredients = function () {
//   var topping1 = "Cheese";
//   var topping2 = "Pepperoni";
//   var topping3 = "Olives";
//   var topping4 = "Artichokes";
//   var large = "large";
//   var medium = "medium";
//   var small = "small";
//
// };
Pizza.prototype.receipt = function () {
  var topping1 = { name: "Cheese", price: 2.00 };
  var topping2 = { name: "Pepperoni", price: 2.00 };
  var topping3 = { name: "Olives", price: 2.00 };
  var topping4 = { name: "Artichokes", price: 2.00 };
  var large = { name: "large", price: 6.00 };
  var medium = { name: "medium", price: 4.00 };
  var small = { name: "small", price: 2.00 };

  // var totalPrice = { name: "Receipt", price: []}
};



// UI
$(document).ready(function() {
  $("form#toppingList").submit(function(event) {
  event.preventDefault();

  var firstTopping = $("#toppingForm1").val();
  console.log(firstTopping)
  var secondTopping = $("#toppingForm2").val();
  console.log(secondTopping)
  var thirdTopping = $("#toppingForm3").val();
  console.log(thirdTopping)
  var fourthTopping = $("#toppingForm4").val();
  console.log(fourthTopping)
  var pizzaSize = $("#toppingForm5").val();
  console.log(pizzaSize)


  var newPizza = new Pizza (firstTopping, secondTopping, thirdTopping, fourthTopping, pizzaSize);
  console.log(newPizza)



  });
});
