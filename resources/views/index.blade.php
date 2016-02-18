
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<div id="msj-success" class="alert alert-success alert-dismissible" role="alert" style="display:none"
  		<strong> Operación hecha Correctamente.</strong>
    </div>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Mantenimiento de Clientes</title>  
    {!!Html::style('css/bootstrap.min.css')!!}
    <!-- {!!Html::style('css/font-awesome.min.css')!!} -->
    {!!Html::style('css/bootstrap-datepicker.min.css')!!}
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
                <form class="form-horizontal" id="formulario">                   
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
                            <input type="text" id="telefono" class="form-control" placeholder="Telefono">
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="control-label col-xs-3" >F. Nacimiento:</label>
                        <div class="col-xs-9">
                            <div class="input-group date" id="fecha_nac">
                                <input type="text" id="fecha_nacimiento" class="form-control" placeholder="Fecha de Nacimiento" name="date">
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                             
                    <div class="form-group">
                        <div class="col-xs-offset-3 col-xs-9">
                            <button type="reset" class="btn btn-default" >Limpiar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" id="registro">Registrar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" id="cerrar">Cerrar </button>
            </div>
        </div>
      </div>
    </div>
     
    <div id="tablaDatos" class="col-md-8">
    </div>

    {!!Html::script('js/jquery.min.js')!!}
    {!!Html::script('js/bootstrap.min.js')!!}
    {!!Html::script('js/bootstrap-datepicker.min.js')!!}
    {!!Html::script('js/functions.js')!!}
    </body>
</html>

