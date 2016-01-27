"use strict";

console.log("javascript loaded");

$(document).ready(init);

function init(){
  $('#addProduct').submit(addProduct);
  $("#productList").on("click", "li", productClick);
}

function addProduct(e){
  e.preventDefault();
  console.log("name", $('#itemName').val());
  console.log("cost", "$" + Number($('#itemCost').val()).toFixed(2));
  console.log("count", $('#itemCount').val());
}

function productClick(e){
  e.stopPropagation();
  console.log(Date.now());
}
