"use strict";

var $productList;

$(document).ready(init);

function init(){
  $productList = $("#productList");
  $('#addProduct').submit(addProduct);
  $productList.on("click", "li", productClick);
}

function addProduct(e){
  e.preventDefault();
  $.post("/product", {
    name: $('#itemName').val(),
    desc: $('#itemDesc').val(),
    cost: Number($('#itemCost').val()).toFixed(2),
    count: $('#itemCount').val()})
  .success(function(data){
    console.log("success:", data);
    var newItem = $("<li>").data("_id", data._id);
    var newItemContents = $('<div>').addClass("row");
    newItemContents.append($('<p>').text(data.name).addClass("col-xs-3"));
    newItemContents.append($('<p>').text(data.desc).addClass("col-xs-3"));
    newItemContents.append($('<p>').text(data.cost).addClass("col-xs-3"));
    newItemContents.append($('<p>').text(data.count).addClass("col-xs-3"));
    newItem.append(newItemContents);
    $productList.append(newItem);
    // console.log("_id:", data._id);
  })
  .fail(function(err){
    console.log("err:",err);
  })
}

function productClick(e){
  e.stopPropagation();
  console.log("_id:", $(this).closest('li').data("_id"));
}
