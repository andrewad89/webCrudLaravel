

 
//Aquí van los scripts

var gestionClientes = ( function () {

	var crear = (function (){
	
		var creaDataClient = function() {		
 			var dataclient = {
    		"nombre":$("#nombre").val(), 
    		"ciudad":$("#ciudad").val(), 
    		"sexo":$("#sexo").val(),
    		"telefono":$("#telefono").val(), 
    		"fecha_nacimiento":$("#fecha_nacimiento").val()
    		};
   
   			return dataclient;
 		};

 		var introducirCliente = function(dataclient){
 			var tablaDatos = $("#tablaDatos");

				$(dataclient).each(function(key,value){
				
				});
			};

		var peticion= function(){

			$("#registro").click(function(){
				
				var route = "http://localhost:8000/guardar/";

				var datacl = creaDataClient();
			
				$.ajax({
					url: route,
					type: 'POST',
					dataType: 'json',
					data:datacl,
					success : introducirCliente(datacl)		
				});
			});
		}();

	}());

	var listar = (function (){
		//genera la tabla dinamicamente a partir de un objeto json que viene por el metodo get
		var generaTabla = function (){

			var miTabla = $("<table>",{"class":"table"});
			var tr1 = $("<tr>");
			var thArr = [];
	
			for(i=1;i<7;i++){
					thArr[i]= $("<th>");
				};	
			$(thArr[1]).append("Nombre");
			$(thArr[2]).append("Ciudad");
			$(thArr[3]).append("Sexo");
			$(thArr[4]).append("Telefono");
			$(thArr[5]).append("Fecha de nacimiento");	
			$(thArr).each(function(){
					$(tr1).append(this);
				});
			
			$(miTabla).append(tr1);

			return miTabla;
		};

		var llenaTabla = function (tab,arr){

			var divTabla = $("#tablaDatos");
			var miTabla = tab;

			$(arr).each( function (key,value){
				var tr2 = $("<tr>");
				var tdArr =[];
				for(i=1;i<7;i++){
					tdArr[i]= $("<td>");
				};
				var editB = $("<button>", {
									"value":value.id,
									"class":"btn btn-primary",
									"data-toggle":"modal",
									"data-target":"#ventanaModal",
									click:gestionClientes.editar.mostrar(this),
									text:"Editar"
								});
	
				var deleteB = $("<button>", {
									"value":value.id,
									"class":"btn btn-danger",
									click:gestionClientes.eliminar(this),
									text:"Eliminar"
								});
	
				$(tdArr[1]).append(value.nombre);
				$(tdArr[2]).append(value.ciudad);
				$(tdArr[3]).append(value.sexo);
				$(tdArr[4]).append(value.telefono);
				$(tdArr[5]).append(value.fecha_nacimiento);
				$(tdArr[6]).append(editB);
				$(tdArr[6]).append(deleteB);
				
				$(tdArr).each(function(){
					$(tr2).append(this);
				});

				$(miTabla).append(tr2);
				$(divTabla).append(miTabla);
			});
		};

		var peticionl= function(){	

			var route = "http://localhost:8000/";
			var tabla = generaTabla();

			$.ajax({
				url: route,
				type: 'GET'		
			})
			.done(function (res){
				llenaTabla(tabla,res);
			});	
		};

		return{peticionl:peticionl}
	
	}());


	var editar = (function(){
	/*hay que implementar varias funciones, 
	-la primera recoge mediante un evento click
	los datos de una fila e inserta en una ventana modal esos datos
	-la segunda recoge esos datos y los convierte en un objeto json
	-la tercera envía los datos en formato json a traves de una ruta que utiliza el metodo actualizar
	desarrollado con laravel
	*/
		var mostrar= function(id){

		};

		return{mostrar:mostrar}

	}());

	var eliminar = function (id){


	};
	
	return {listar:listar,editar:editar,eliminar:eliminar}

}());

	$(document).ready(function(){
		gestionClientes.listar.peticionl();
	});

	