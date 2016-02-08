
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
=======
//Aquí van los scripts

var gestionClientes = ( function () {


	var crear = (function (){
	// llamar a formulario nuevo
		$("#nuevo a").click(function(){
			$("#formulario").show();
			$("#tabla").hide();
			$.ajax({
				type: "GET",
				url: 'nuevo.php',
				success: function(datos){
					$("#formulario").html(datos);
				}
			});
			return false;
		});
		return {}
	}());

	var listar = function (){
		//genera la tabla dinamicamente a partir de un objeto json que viene por el metodo get
		var tablaDatos = $("#tablaDatos");
		var route = "http://localhost:8000/";
	
		$.get(route, function(res){
			$(res).each(function(key,value){
			tablaDatos.append("<tr><td>"+value.nombre+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
			});
		});
	};


	var actualizar = (function(){
	/*hay que implementar varias funciones, 
	-la primera recoge mediante un evento click
	los datos de una fila e inserta en una ventana modal esos datos
	-la segunda recoge esos datos y los convierte en un objeto json
	-la tercera envía los datos en formato json a traves de una ruta que utiliza el metodo actualizar
	desarrollado con laravel
	*/

		return{}
	}());

	var borrar = (function (){


		return{}
	}());

	return {crear:crear,listar:listar,actualizar:actualizar,borrar:borrar}

}());

	$(document).ready(function(){
		gestionClientes.listar();
	});
	



