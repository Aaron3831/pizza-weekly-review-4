function Pizza (topping1, topping2, topping3, topping4, pizzaSize) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.pizzaSize = pizzaSize;
  this.addAll = [];

};
Pizza.prototype.pizzaString = function newPizzaToString() {
  var return1 = this.topping1 + ", " + this.topping2 + ", " + this.topping3 + ", " + this.topping4 + ", " + this.pizzaSize;
  return return1;
};

Pizza.prototype.receipt = function () {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;

  var topping1 = 2;
  var topping2 = 2;
  var topping3 = 2;
  var topping4 = 2;
  var pizzaSize = $("#toppingForm5").val();

  var addAll = parseInt(topping1 + topping2 + topping3 + topping4 + parseInt(pizzaSize));

  console.log(addAll)

  $("#addAll").text("$" + addAll)
  return addAll;
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

  $("ul#results").text(newPizza.pizzaString());

  $("form#addEverything").click(function(event) {
  event.preventDefault();

  console.log(newPizza)

    var receiptPizza = newPizza.receipt();
    console.log(receiptPizza)
    // $("p#addAll").append(receiptPizza)
    });
  });
});
