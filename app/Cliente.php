<?php

namespace webCrud;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = "clientes";

    protected $fillable = [
        'nombre', 'apellido','ciudad', 
        'sexo','telefono',
        'fecha_nacimiento',
    ];
}
