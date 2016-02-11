<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

	<div id="msj-success" class="alert alert-success alert-dismissible" role="alert" style="display:none">
  		<strong> Operación hecha Correctamente.</strong>
</div>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Mantenimiento de Clientes</title>
  
  {!!Html::style('css/bootstrap-datepicker.min.css')!!}
  {!!Html::style('css/bootstrap-datepicker3.min.css')!!}
	{!!Html::style('css/bootstrap.min.css')!!}
<<<<<<< HEAD
  {!!Html::style('css/metisMenu.min.css')!!}
  {!!Html::style('css/sb-admin-2.css')!!}
  {!!Html::style('css/font-awesome.min.css')!!}
      
  
  
=======
    {!!Html::style('css/metisMenu.min.css')!!}
    {!!Html::style('css/sb-admin-2.css')!!}
    {!!Html::style('css/font-awesome.min.css')!!} 
>>>>>>> 0dcd17fb9d59f8044e5592ace6affe329abdc8b8
</head>

<body>


<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#ventanaModal" id="nuevo">
        Nuevo Cliente
</button>   
<!-- Modal -->

<div class="modal fade" id="ventanaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    
      <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                
                <h4 class="modal-title" id="myModalLabel">Registro de Clientes</h4>

      </div>

    <div class="modal-body">
                
<<<<<<< HEAD
              

        <form method="post" class="form-horizontal" id="formulario">
=======
                <h1> DATOS CLIENTE</h1>
                
                <form class="form" method="post">
>>>>>>> 0dcd17fb9d59f8044e5592ace6affe329abdc8b8
                
          
          <div class="form-group">
            <label class="control-label col-xs-3">Nombre:</label>
        
            <div class="col-xs-9">
              <input type="text" id="nombre" class="form-control" placeholder="Nombre">
            </div>
      
          </div>

          
          <div class="form-group">
            <label class="control-label col-xs-3">Ciudad:</label>
        
            <div class="col-xs-9">
              <input type="text" id="ciudad" class="form-control" placeholder="Ciudad">
            </div>
        
          </div>
        
          
          <div class="form-group">
            <label class="control-label col-xs-3">Sexo:</label>
        
          <div class="col-xs-9">
            <input type="text" id="sexo" class="form-control" placeholder="Sexo">
          </div>
        
          </div>
                
          
          <div class="form-group">
            <label class="control-label col-xs-3" >Telefono:</label>
        
            <div class="col-xs-9">
              <input type="text"  class="form-control" placeholder="Telefono">
            </div>
    
          </div>
                 

<<<<<<< HEAD
          <div class="form-group">
            <label class="control-label col-xs-3" >F. Nacimiento:</label>
        
            <div class="col-xs-9">
              <div class="input-group input-append date" id="fecha_nacimiento">

                <input type="text"  id="fecha_nacimiento" class="form-control" placeholder="Fecha de Nacimiento" name="date" >
                    <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
              </div>
=======
>>>>>>> 0dcd17fb9d59f8044e5592ace6affe329abdc8b8
            </div>
          </div>
                
                 
                 <div class="form-group">
                  
                  <div class="col-xs-offset-3 col-xs-9">
                    <button type="submit" class="btn btn-primary" id="registro" onclick="peticion" >
                                              Registrar
                    </button>
                      <button type="reset" class="btn btn-default" >
                                                Limpiar
                      </button>

<<<<<<< HEAD
<script>
  
$(document).ready(function() {
    
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






  
</script>
                  </div>
                </div>
    </div>

          <div class="modal-footer">
          
            <button type="button" class="btn btn-primary" data-dismiss="modal">
=======
            <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" id="registro">
                Guardar
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" id="cerrar">
>>>>>>> 0dcd17fb9d59f8044e5592ace6affe329abdc8b8
                Cerrar 
            </button>
 
          </div>

           

         </div>
      </div>
  </div>
</div>

      
<div id="tablaDatos">
    
    </div>

    {!!Html::script('js/bootstrap-datepicker.min.js')!!}
    {!!Html::script('js/jquery.min.js')!!}
    {!!Html::script('js/bootstrap.min.js')!!}
    {!!Html::script('js/metisMenu.min.js')!!}
    {!!Html::script('js/sb-admin-2.js')!!}
    {!!Html::script('js/functions.js')!!}
</body>
</html>
