"use strict";

$(document).ready(init);

var id;

function init(){
  id = $("#item").children().data("id");
  $("#updateItem").submit(updateItem);
  $("#delete").click(deleteItem);
}

function updateItem(e){
  e.preventDefault();
  $.ajax({
    url: "/product/"+id,
    method: "PUT",
    data: {
      name: $("#itemName").val(),
      desc: $("#itemDesc").val(),
      cost: $("#itemCost").val(),
      count: $("#itemCount").val()
    }
  })
  .success(function(){
    for(var i = 0; i < arguments.length; i++){
      console.log("arg",i+":",arguments[i]);
    }
    location.href = "/"; //change this to update data on current page if there is time
  })
  .fail(function(err){
    console.error(err);
  })
}

function deleteItem(){ //change this to prompt for confirmation if there is time to do so
  $.ajax({
    url: "/product/"+id,
    method: "DELETE"
  })
  .success(function(){
    location.href = "/";
  })
  .fail(function(err){
    if(err) return console.error(err);
  })
}
