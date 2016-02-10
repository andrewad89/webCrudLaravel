<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

	<div id="msj-success" class="alert alert-success alert-dismissible" role="alert" style="display:none">
  		<strong> Operación hecha Correctamente.</strong>
</div>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Mantenimiento de Clientes</title>
	{!!Html::style('css/bootstrap.min.css')!!}
    {!!Html::style('css/metisMenu.min.css')!!}
    {!!Html::style('css/sb-admin-2.css')!!}
    {!!Html::style('css/font-awesome.min.css')!!}
</head>

<body>
<div id="contenedor">
   
    <div id="formulario" style="display:none;">

    	
    

<button type="btn btn-info" data-toogle="modal" data-target="#ventanaModal">
    	Nuevo Cliente
    	</button>

<div class="modal fade" id="ventanaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

<div class="modal-dialog">

<div class="modal-content">

<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	<h4> Aqui va la tabla</h4>
</div>
<div class="modal-body">
cuerpoooo
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal">
Cerrar 
</button>
	</div>
	</div>
	</div>
	</div>
	</div>

	
	






    <div id="tabla">
    
    </div>

</div>
<span style="text-align:center;width:300px;margin:auto;display:block;margin-top:20px;">
    
    </div>

    <div id="tablaDatos">
    
    </div>
	    
	{!!Html::script('js/jquery.min.js')!!}
    {!!Html::script('js/bootstrap.min.js')!!}
    {!!Html::script('js/metisMenu.min.js')!!}
    {!!Html::script('js/sb-admin-2.js')!!}
    {!!Html::script('js/functions.js')!!}
</body>
</html>
