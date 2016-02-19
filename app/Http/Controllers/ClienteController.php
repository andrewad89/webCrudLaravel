<?php

namespace webCrud\Http\Controllers;

use Illuminate\Http\Request;
use Iluminate\Routing\Route;

use webCrud\Http\Requests;
use webCrud\Http\Controllers\Controller;
use webCrud\Cliente;


class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function listing(Request $request) {
        
        if ($request->ajax()){
            $clientes = Cliente::all();
            return response()->json(
                $clientes->toarray() 

            );
        }
        return view('index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request)
    {

         if($request->ajax()){
            Cliente::create($request->all());
            $clientes=Cliente::all();
            return response()->json([
                $clientes->last()
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cliente = Cliente::find($id);
        $cliente->fill($request->all());
        $cliente->save();

        return response()->json([
            "mensaje"=>"listo"
            ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */ 
    public function destroy($id)
    {
      $cliente = Cliente::find($id);
      $cliente->delete();

      return response()->json([
            "mensaje"=>"borrado"
            ]);

    }
}
