@extends('layouts.admin')
	@section('content')
	{!!Form::open()!!}
	<div id="msj-success" class="alert alert-success alert-dismissible" role="alert" style="display:none">
    		<strong> Cliente Agregado Correctamente.</strong>
		</div>

		@include('cliente.form.cliente')
		{!!link_to('#', $title='Registrar', $attributes = ['id'=>'registro', 'class'=>'btn btn-primary'],
		$secure=null)!!}

	{!!Form::close()!!}
	@endsection