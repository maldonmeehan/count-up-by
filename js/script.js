$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var upToInput = parseInt($("#upTo").val());
    var countByInput = parseInt($("#countBy").val());
    var result = [];

    for (var index = countByInput; index <= upToInput; index += countByInput){
      result.push(index);
    }
    alert(result);
  });
});
