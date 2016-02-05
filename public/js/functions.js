$("#registro").click(function(){
	var dato = $("#cliente").val();
	var route = "localhost:80/cliente";
	var token = $("#token").val();

	$.ajax({
		url: route,
		headers: {'X-CSRF-TOKEN': token},
		type: 'POST',
		dataType: 'json',
		data:{cliente: dato},

		success:function(){
			$("#msj-success").fadeIn();
		},
		error:function(msj){
			$("#msj").html(msj.responseJSON.cliente);
			$("#msj-error").fadeIn();
		}
	});
});