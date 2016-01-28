"use strict";

$(document).ready(init);

function init(){
  $("#updateItem").submit(updateItem);
}

function updateItem(e){
  e.preventDefault();
  var id = $("#item").children().data("id");
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
