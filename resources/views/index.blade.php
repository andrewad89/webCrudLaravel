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


<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#ventanaModal">
        Nuevo Cliente
</button>   
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    
    <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>

            </div>

            <div class="modal-body">
                
                <h1> DATOS CLIENTE</h1>
                
                <form method="post">
                
                NOMBRE: <input type="text" id="nombre"><BR>
                CIUDAD:<input type="text" id="ciudad"><BR>
                SEXO:<input type="text" id="sexo"><BR>
                TELEFONO:<input type="text" id="telefono"><BR>
                FECHA DE NACIMIENTO:<input type="text" id="fecha_nacimiento"><BR>
                <input type="submit" id="registro" value="Aceptar" onClick="gestionClientes">
                </form>


 
            </div>

            <div class="modal-footer">

            <button type="button" class="btn btn-primary" data-dismiss="modal">
                Cerrar 
            </button>

         </div>
      </div>
  </div>
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
