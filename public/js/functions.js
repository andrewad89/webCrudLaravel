

var gestionClientes = (function (){

	var arr=[];

	var listar = (function (){
		//genera la tabla dinamicamente a partir de un objeto json que viene por el metodo get
		var añadeId= function (id){
			$(".modal-dialog").attr("value",id);
		};

		var generaTabla = function (res){
			var objArr=[];
			$.each(res[0],function(key,value){if(typeof(value)=="string")objArr.push(key);});	
			var miTabla = $("<table>",{"class":"table table-hover"});
			var tr1 = $("<tr>");
			$.each(objArr,function(key,value){$(tr1).append($("<th>").append(value))})
			$(miTabla).append(tr1);

			return miTabla;
		};

		var llenaTabla = function (arr){

			var body = $("<tbody>");

			$(arr).each( function (key,value){
				var _this=this;
				var tr2 = $("<tr>", {"id":value.id});
				var tdArr =[];
				
				$.each(this,function(key,value){
					if(typeof(value)=="string")tdArr.push($("<td>").append(value));
				});
				
				var editB = $("<button>", {
									"class":"btn btn-primary",
									"data-toggle":"modal",
									"data-target":"#ventanaModal",
									click: function(){editar.mostrar(_this);
													añadeId(value.id);
										   			$("#registro").attr("value","editar");							   			
									},
									text:"Editar"
								});
	
				var deleteB = $("<button>", {
									"value":value.id,
									"class":"btn btn-danger elimina",
									click:function(){eliminar(this)},
									text:"Eliminar"

								});
				tdArr.push($("<td>").append(editB));
				tdArr.push($("<td>").append(deleteB));			
				$(tdArr).each(function(){
					$(tr2).append(this);
				});
				$(body).append(tr2);
			});

			return body;
		};

		var mostrarTabla = function(t,b){
			$(t).append(b);
			$("#tablaDatos").append(t);
		};

		var peticionl= function(){
				
			var route = "http://localhost:8000/";

			$.ajax({
				url: route,
				type: 'GET'	
			})
			.done(function (res){
				gestionClientes.arr=res;
				var tabla = generaTabla(res);
				var tbody = llenaTabla(res);
				var tr = tbody.children();
				mostrarTabla(tabla,tr);
			});
		};

		return{llenaTabla:llenaTabla,mostrarTabla,peticionl:peticionl}
	}());

	var crear = (function (){
	
		var creaDataClient = function() {		
 			
 			var dataclient = {
    		"nombre":$("#nombre").val(),
    		"apellido":$("#apellido").val(), 
    		"ciudad":$("#ciudad").val(), 
    		"sexo":$("#sexo").val(),
    		"telefono":$("#telefono").val(), 
    		"fecha_nacimiento":$("#fecha_nacimiento").val()
    		};
   
   			return dataclient;
 		};

		var peticion= function(){
			var botonr = $("#registro");

			$("#nuevo").click(function(){
				$(botonr).attr("value","crear");
			});

			$(botonr).click(function(){
				if($(botonr).attr("value")=="crear"){
					var route = "http://localhost:8000/cliente";
					var datacl = creaDataClient();
				
					$.ajax({
						url: route,
						type: 'POST',
						dataType: 'json',
						data:datacl
					})
					.done(function (res){
					var tbody = listar.llenaTabla(res);
					var tr = tbody.children();
					listar.mostrarTabla($(".table"),tr)
					});
				};	
			});
		};
		return{creaDataClient:creaDataClient,peticion:peticion}
	}());

	var editar = (function(){
	/*hay que implementar varias funciones, 
	-la primera recoge mediante un evento click
	los datos del array de json e inserta en una ventana modal esos datos
	-la segunda recoge esos datos y los convierte en un objeto json
	-la tercera envía los datos en formato json a traves de una ruta que utiliza el metodo actualizar
	desarrollado con laravel*/

		var mostrar = function(json){
			
			$("#nombre").val(json.nombre);
			$("#apellido").val(json.Apellido);
			$("#ciudad").val(json.ciudad);
			$("#sexo").val(json.sexo);
			$("#telefono").val(json.telefono);
			$("#fecha_nacimiento").val(json.fecha_nacimiento);

		};

		var peticione= function(){		
			var botonr = $("#registro");
			$(botonr).click(function(){
				if($(botonr).attr("value")=="editar"){
					var id = parseInt($(".modal-dialog").attr("value"));
					var route = "http://localhost:8000/cliente/"+id+"";
					var datacl = crear.creaDataClient();
				
					$.ajax({
						url: route,
						type: 'PUT',
						dataType: 'json',
						data:datacl
					})
					.done(function (){
						var trO= $("#"+id);
						var tbN= listar.llenaTabla(datacl);
						var trN= tbN.children();
						trN.attr("id",id);
						$(trO).replaceWith(trN);
					});
				};	
			});
		};

		return{mostrar:mostrar,peticione:peticione}

	}());

	var eliminar = function (btn){
		var ident= $(btn).parents("tr").attr("id");
		var route = "http://localhost:8000/cliente/"+ident+"";

		$.ajax({
			url: route,
			type: 'DELETE',
			dataType: 'json',
		})
		.done(function (){
			$("#"+ident).remove();
		});
	};

	var init = function (){

		listar.peticionl();
		crear.peticion();
		editar.peticione();
	
		$("body").on('hidden.bs.modal', '.modal', function () {
    		$("#formulario>div>div>input").each(function(){$(this).val("")});
    	 });

	};
	
	return {init:init,arr:arr}
}());
	
$("document").ready(gestionClientes.init());
	
	

	

	

