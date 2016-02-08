$("#registro").click(function(){
	var dato = $("#nombre").val();
	var route = "localhost:8000/cliente";
	

	$.ajax({
		url: route,
		type: 'POST',
		dataType: 'json',
		data:{nombre: dato},

		success:function(){
			$("#msj-success").fadeIn();
		},
		error:function(msj){
			$("#msj").html(msj.responseJSON.nombre);
			$("#msj-error").fadeIn();
		}
	});
});