<?php

namespace webCrud\Http\Controllers;

use Illuminate\Http\Request;
use Iluminate\Routing\Route;

use webCrud\Http\Requests;
use webCrud\Http\Controllers\Controller;
use webCrud\Cliente;


class ClienteController extends Controller
{
    public function __construct(){
        $this->middleware('@find',['only'=>['edit','update','destroy']]);
    }

    public function find(Route $route){
        $this->cliente = Cliente::find($route->getParameter('cliente'));
    }
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cliente.create');
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
            return response()->json([
                "mensaje" => "creado"
            ]);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(
            $this-> cliente->toArray()
            );
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
        $this->cliente->fill($request->all());
        $this->cliente->save();

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
    public function destroy()
    {
      $this->cliente->delete();

      return response()->json([
            "mensaje"=>"borrado"
            ]);

    }
}
