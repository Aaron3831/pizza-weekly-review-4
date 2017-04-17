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

  var topping1 = $("#toppingForm1").val();
  var topping2 = $("#toppingForm2").val();
  var topping3 = $("#toppingForm3").val();
  var topping4 = $("#toppingForm4").val();
  var pizzaSize = $("#toppingForm5").val();

  var Cheese = 2
  var Pepperoni = 3
  var Olives = 4
  var Artichokes = 5
  var small = 6
  var medium = 7
  var large = 8

  if (this.topping1 === "") {
    this.topping1 === 0
  } else if (this.topping1 === "Cheese") {
    this.topping1 === 2
  } else if (this.topping1 === "Pepperoni") {
    this.topping1 === 3
  } else if (this.topping1 === "Olives") {
    this.topping1 === 4
  } else if (this.topping1 === "Artichokes") {
    this.topping1 === 5
  }
  if (this.topping2 === "") {
    this.topping2 === 0
  } else if (this.topping2 === "Cheese") {
    this.topping2 === 2
  } else if (this.topping2 === "Pepperoni") {
    this.topping2 === 3
  } else if (this.topping2 === "Olives") {
    this.topping2 === 4
  } else if (this.topping2 === "Artichokes") {
    this.topping2 === 5
  }
  if (this.topping3 === "") {
    this.topping3 === 0
  } else if (this.topping3 === "Cheese") {
    this.topping3 === 2
  } else if (this.topping3 === "Pepperoni") {
    this.topping3 === 3
  } else if (this.topping3 === "Olives") {
    this.topping3 === 4
  } else if (this.topping3 === "Artichokes") {
    this.topping3 === 5
  }
  if (this.topping4 === "") {
    this.topping4 === 0
  } else if (this.topping4 === "Cheese") {
    this.topping4 === 2
  } else if (this.topping4 === "Pepperoni") {
    this.topping4 === 3
  } else if (this.topping4 === "Olives") {
    this.topping4 === 4
  } else if (this.topping4 === "Artichokes") {
    this.topping4 === 5
  }
  if (pizzaSize === "") {
    pizzaSize === 0
  }

  console.log(topping1)
  console.log(topping2)
  console.log(topping3)
  console.log(topping4)

  var total = [topping1 + topping2 + topping3 + topping4 + pizzaSize];

  for(var i=0; i < total.length; i++) {
    total[i] = total[i].replace(/Cheese/g, parseInt(2));
  } for(var j=0; j < total.length; j++) {
    total[j] = total[j].replace(/Pepperoni/g, parseInt(3));
  } for(var k=0; k < total.length; k++) {
    total[k] = total[k].replace(/Olives/g, parseInt(4));
  } for(var m=0; m < total.length; m++) {
    total[m] = total[m].replace(/Artichokes/g, parseInt(5));
  } for(var n=0; n < total.length; n++) {
    total[n] = total[n].replace(/small/g, parseInt(6));
  } for(var p=0; p < total.length; p++) {
    total[p] = total[p].replace(/medium/g, parseInt(7));
  } for(var q=0; q < total.length; q++) {
    total[q] = total[q].replace(/large/g, parseInt(8));
  }

  console.log(total)

  var totalString = total.toString()

  console.log(totalString)

  function add(string) {
      string = string.split('');                 //split into individual characters
      var sum = 0;                               //have a storage ready
      for (var i = 0; i < string.length; i++) {  //iterate through
          sum += parseInt(string[i],10);         //convert from string to int
      }
      return sum;                                //return when done
  }
  console.log(add(totalString))

  // var sumTotal = 0;
  // var summands = newTotal;
  // summands.forEach(function(summand) {
  //   sumTotal += summand;
  // });

  $("#addAll").text("$" + add(totalString))
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

  console.log(document.getElementById('#toppingForm1'))

  $("ul#results").text(newPizza.pizzaString());

  $("form#addEverything").click(function(event) {
  event.preventDefault();

  console.log(newPizza)

    var receiptPizza = newPizza.receipt();
    console.log(receiptPizza)
    // $("p#addAll").append(receiptPizza)

    $("#toppingForm1").val("");
    $("#toppingForm2").val("");
    $("#toppingForm3").val("");
    $("#toppingForm4").val("");
    $("#toppingForm5").val("");
    });
  });
});
