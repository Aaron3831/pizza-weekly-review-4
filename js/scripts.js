function Pizza (topping1, topping2, topping3, topping4, pizzaSize) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.pizzaSize = pizzaSize;
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
Pizza.prototype.pizzaString = function newPizzaToString() {
  var return1 = this.topping1 + ", " + this.topping2 + ", " + this.topping3 + ", " + this.topping4 + ", " + this.pizzaSize;
  return return1;
};

Pizza.prototype.receipt = function () {
  var Cheese = 2.00;
  var Pepperoni = 2.00;
  var Olives = 2.00;
  var Artichokes = 2.00;
  var Large = 6.00;
  var Medium = 4.00;
  var Small = 2.00 ;
  var None = 0;

  var add = topping1 + topping2 + topping3 + topping4 + pizzaSize

  return add;
  $("#addAll").text(add);

  // var totalPrice = { name: "Receipt", price: []}
};



// UI
$(document).ready(function() {
  $("form#toppingList").submit(function(event) {
  event.preventDefault();

  var firstTopping = $("#toppingForm1").val();
  var secondTopping = $("#toppingForm2").val();
  var thirdTopping = $("#toppingForm3").val();
  var fourthTopping = $("#toppingForm4").val();
  var pizzaSize = $("#toppingForm5").val();


  var newPizza = new Pizza (firstTopping, secondTopping, thirdTopping, fourthTopping, pizzaSize);
  console.log(newPizza)

  console.log(newPizza.pizzaString())

  $("ul#results").append(newPizza.pizzaString());
  });
  $("form#toppingList").click(function(event) {
  event.preventDefault();

  return newPizza.receipt(newPizza);
  console.log(newPizza.receipt(newPizza))

  $("p#price").text(newPizza);

  });
});
