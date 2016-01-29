<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
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
    </div>
    <div id="tabla">
    
	<span id="nuevo"><a href="nuevo.php"><img src="img/add.png" alt="Agregar dato" /></a></span>
		<table>
	   		<tr>
	   			<th>Nombres</th>
	    		<th>Ciudad</th>
	    		<th>Sexo</th>
	    		<th>Telefono</th>
	            <th>Fecha Nacimiento</th>
	            <th></th>
	            <th></th>
	        </tr>
	    </table>    </div>
	    
	{!!Html::script('js/jquery.min.js')!!}
    {!!Html::script('js/bootstrap.min.js')!!}
    {!!Html::script('js/metisMenu.min.js')!!}
    {!!Html::script('js/sb-admin-2.js')!!}
</body>
</html>
