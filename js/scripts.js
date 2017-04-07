function Pizza (topping1, topping2, topping3, topping4, pizzaSize) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.pizzaSize = pizzaSize;
  this.addAll = [];

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
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  // this.pizzaSize = pizzaSize;

  var topping1 = 2;
  var topping2 = 2;
  var topping3 = 2;
  var topping4 = 2;
  var pizzaSize = $("#toppingForm5").val();
  // var pizzaSize = (Small || Medium || Large);

  // var pizzaSize = (Small || Medium || Large)
  // if (pizzaSize = "2") {
  //   pizzaSize = 2
  // } else if (pizzaSize = "4") {
  //   pizzaSize = 4
  // } else {
  //   pizzaSize = 6 }
  //
  // var Small = 2;
  // var Medium = 4;
  // var Large = 6;

  var addAll = parseInt(topping1 + topping2 + topping3 + topping4 + parseInt(pizzaSize));
    // if (pizzaSize = "Small") {
    //   return addAll + 2
    // }
    // else if (pizzaSize = "Medium") {
    //   return addAll + 4
    // }
    // else {
    //   return addAll + 6 }




  $("#addEverything").text("$" + addAll)

  // this.addAll = parseInt(topping1 + topping2 + topping3 + topping4)

  return addAll;

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

  $("ul#results").append(newPizza.pizzaString());

  $("form#addEverything").click(function(event) {
  event.preventDefault();

  console.log(newPizza)

    var receiptPizza = newPizza.receipt();
    console.log(receiptPizza)
    $("p#addAll").append(receiptPizza)
    });
  });
});
