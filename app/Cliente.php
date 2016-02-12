<?php

namespace webCrud;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = "clientes";

    protected $fillable = [
<<<<<<< HEAD
        'nombre', 'apellido','ciudad', 
=======
        'nombre','ciudad', 
>>>>>>> c468ef19f985566745e99bebb90983b6dffcdff7
        'sexo','telefono',
        'fecha_nacimiento',
    ];
}
