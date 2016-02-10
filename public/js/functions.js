

 
//Aquí van los scripts

var gestionClientes = ( function () {


	var crear = (function (){
	// llamar a formulario nuevo
	var creaDataClient = function() {
 	var dataclient = [
    
    {"nombre":$("#nombre").val(), 
    "ciudad":$("#ciudad").val(), 
    "sexo":$("#sexo").val(),
    "telefono":$("#telefono").val(), 
    "fecha_nacimiento":$("#fecha_nacimiento").val()}
    ];
   
   return{dataclient:dataclient}
 };

$("#registro").click(function(){
<<<<<<< HEAD
	var dato = $("#nombre").val();
	var dato2 = $("#ciudad").val();
	var dato3 = $("#sexo").val();
	var dato4 = $("#telefono").val();
	var dato5 = $("#fecha_nacimiento").val();
	var route = "localhost:8000/cliente";
=======
>>>>>>> 4242f5f4930924bbff116e128d44c207e0fae3e2
	
	var route = "http://localhost:8000/";
	
	$.ajax({
		url: route,
		type: 'POST',
		dataType: 'json',
<<<<<<< HEAD
		data:{nombre: dato},
		data:{ciudad: dato2},
		data:{sexo: dato3},
		data:{telefono: dato4},
		data:{fecha_nacimiento: dato5},

		success:function(){
			$("#msj-success").fadeIn();
		},
		error:function(msj){
			$("#msj").html(msj.responseJSON.nombre);
			$("#msj-error").fadeIn();
		}
	});
});
//Aquí van los scripts

var gestionClientes = ( function () {
=======
		data:dataclient,
		success : introducirCliente(dataclient) {
       },
   

	});
});
>>>>>>> 4242f5f4930924bbff116e128d44c207e0fae3e2

var introducirCliente = function(dataclient){
			$(dataclient).each(function(key,value){
			tablaDatos.append("<tr><td>"+value.nombre+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
			});
		};
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
	



