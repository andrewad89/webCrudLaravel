

 
//Aquí van los scripts

<<<<<<< HEAD

















































































=======
$(function() {
    $( "#fecha_nacimiento" ).datepicker();
  });
>>>>>>> 38d3d0c436a315b257241673da2339b95f52e58a

var gestionClientes = ( function () {


	var crear = (function (){
	
		var creaDataClient = function() {
 			
 			var dataclient = [
    
    		{"nombre":$("#nombre").val(), 
    		"ciudad":$("#ciudad").val(), 
    		"sexo":$("#sexo").val(),
    		"telefono":$("#telefono").val(), 
    		"fecha_nacimiento":$("#fecha_nacimiento").val()}
    		];
   
   			return{dataclient}
 		};

<<<<<<< HEAD
 		var introducirCliente = function(dataclient){
 			var tablaDatos = $("#tablaDatos");
=======
$("#registro").click(function(){

	
  var route = "http://localhost:8000/";
	
	$.ajax({
		url: route,
		type: 'POST',
		dataType: 'json',

		data:dataclient,

		success:introducirCliente(dataclient)
	
	});
});
//Aquí van los scripts

var gestionClientes = ( function () {

		data:dataclient,
		success : introducirCliente(dataclient)
   
>>>>>>> 38d3d0c436a315b257241673da2339b95f52e58a

				$(dataclient).each(function(key,value){
				tablaDatos.append("<tr><td>"+value.nombre+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
				});
			};

		var peticion= function(datacl){


			$("#registro").click(function(){

				
				var route = "http://localhost:8000/guardar/";

				//creaDataClient();
			
				$.ajax({
					url: route,
					type: 'POST',
					dataType: 'json',
					data:datacl,
					success : introducirCliente(datacl)
			
				});

<<<<<<< HEAD
=======

var introducirCliente = function(dataclient){
			$(dataclient).each(function(key,value){
			tablaDatos.append("<tr><td>"+value.nombre+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
>>>>>>> 38d3d0c436a315b257241673da2339b95f52e58a
			});

		};

		 return {creaDataClient:creaDataClient,peticion:peticion}

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


	var editar = (function(){
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
	
	return {crear:crear,listar:listar,editar:editar,borrar:borrar}

}());

	$(document).ready(function(){
		gestionClientes.listar();
	});

	
	



