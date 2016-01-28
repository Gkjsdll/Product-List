"use strict";

var $productList, $total, $itemImage;

$(document).ready(init);

function init(){
  $productList = $("#productList");
  $total = $("#totalAmount");
  $itemImage = $("#itemImage");
  $('#addProduct').submit(addProduct);
  $productList.on("click", "li", productClick);
}

function addProduct(e){
  e.preventDefault();
  if($itemImage.val() && ($itemImage.val().slice($itemImage.val().lastIndexOf('.')) === ".png" || $itemImage.val().slice($itemImage.val().lastIndexOf('.')) === ".jpg")){
    $.post("/product", {
      name: $('#itemName').val(),
      desc: $('#itemDesc').val(),
      cost: Number($('#itemCost').val()).toFixed(2),
      image: $itemImage.val(),
      count: $('#itemCount').val()})
      .success(function(data){
        var newItem = $("<li>").data("id", data._id);
        var newItemContents = $('<div>').addClass("row");
        newItemContents.append($('<p>').text(data.name).addClass("col-xs-3"));
        newItemContents.append($('<p>').text(data.desc).addClass("col-xs-3"));
        newItemContents.append($('<p>').text("$" + Number(data.cost).toFixed(2)).addClass("col-xs-3"));
        newItemContents.append($('<p>').text(data.count).addClass("col-xs-3"));
        newItem.append(newItemContents);
        $productList.append(newItem);

        updateTotal(data.cost);
      })
      .fail(function(err){
        console.log("err:",err);
      })
    }
    else{
      alert("Image path must contain a link to a png or jpg image.");
    }
}

function productClick(e){
  e.stopPropagation();
  var id = $(this).closest('li').data("id");
  location.href = "/product/"+id;
}


function updateTotal(diff){
  var currTotal = Number($total.text().slice(1));
  var newTotal = currTotal + diff;
  $total.text("$" + newTotal.toFixed(2));
  return newTotal;
};
