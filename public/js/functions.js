
//Aquí van los scripts

var fnac = $(document).ready(function() {
    $('#fecha_nacimiento')
        .datepicker({
            format: 'mm/dd/yyyy',
            startDate: '01/01/2010',
            endDate: '12/30/2020'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#fecha_nacimiento').formValidation('revalidateField', 'date');
        });

    $('#fecha_nacimiento').formValidation({
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
				tablaDatos.append("<tr><td>"+value.nombre+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
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

	

