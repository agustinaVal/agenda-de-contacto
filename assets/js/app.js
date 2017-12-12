  $(document).ready(function(){
    $('.modal').modal();

    $("#guardar").click(function() {
		var name = $("#name").val();
		$("#name").val ('');
		var number = $("#number").val();
		$("#number").val ('');

		$("#contenedor").append('<div class="container">' + '<div class="panel panel-default">' + '<div class="panel-body">' + '<h3>' + name + '</h3>' + '<hr>' + '<h6>' + number + '</h6>'+ '</div>' + '</div>' + '</div>');});





  });