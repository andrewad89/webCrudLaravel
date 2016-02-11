
<<<<<<< HEAD

//Aquí van los scripts
=======
>>>>>>> f86dcabdf6f4b00de8367e21ed3b7cb46aba7a6e

//Aquí van los scripts
/*
var fnac = $(document).ready(function() {
    
    $('#fecha_nacimiento')
        .datepicker({
            format: 'mm/dd/yyyy',
            startDate: '01/01/2010',
            endDate: '12/30/2020'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#formulario').formValidation('revalidateField', 'date');
        });

    $('#formulario').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            date: {
                validators: {
                    notEmpty: {
                        message: 'El campo de fecha esta vacio'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        min: '01/01/2010',
                        max: '12/30/2020',
                        message: 'Esta fecha no es valida'
                    }
                }
            }
        }
    });
});
*/

<<<<<<< HEAD

=======
>>>>>>> f86dcabdf6f4b00de8367e21ed3b7cb46aba7a6e
var gestionClientes = (function (){

	var listar = (function (){
		//genera la tabla dinamicamente a partir de un objeto json que viene por el metodo get
		var añadeId= function (id){
			$(".modal-dialog").attr("value",id);
		};

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

		var llenaTabla = function (arr){

			var body = $("<tbody>");

			$(arr).each( function (key,value){
				var _this=this;
				var tr2 = $("<tr>", {"id":value.id});
				var tdArr =[];
				for(i=1;i<7;i++){
					tdArr[i]= $("<td>");
				};
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
									"class":"btn btn-danger",
									click:function(){eliminar(value.id)},
									text:"Eliminar"
<<<<<<< HEAD
								});

	
=======
								});	
>>>>>>> f86dcabdf6f4b00de8367e21ed3b7cb46aba7a6e
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
				var tabla = generaTabla();
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
					.done(function (){
					var tbody = listar.llenaTabla(datacl);
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
						$(trO).replaceWith(trN);
					});
				};	
			});
		};

		return{mostrar:mostrar,peticione:peticione}

	}());

	var eliminar = function (id){
		var ident= id;
		var route = "http://localhost:8000/cliente/"+id+"";
		var datacl = crear.creaDataClient();
	
		$.ajax({
			url: route,
			type: 'DELETE',
			dataType: 'json',
			data:datacl
		})
		.done(function (){
			var trO= $("#"+id);
			var tbN= listar.llenaTabla(datacl);
			var trN= tbN.children();
			$(trO).replaceWith(trN);
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
	
	return {init:init}
}());
	
$("document").ready(gestionClientes.init());
	
	

	

	

