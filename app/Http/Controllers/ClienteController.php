<?php

namespace webCrud\Http\Controllers;

use Illuminate\Http\Request;
use Iluminate\Routing\Route;

use webCrud\Http\Requests;
use webCrud\Http\Controllers\Controller;
use webCrud\Cliente;


class ClienteController extends Controller
{
    public function __contruct(){
        $this->beforeFilter('@find,['only=>['edit','update','destroy']]);
    }

    public function find(Route $route){
        $this->user = User::find($route->getParameter('cliente'));
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


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
        this->$cliente->fill($request->all());
        this->$cliente->save();

        return response()->json([
            "mensaje"=>"listo";
            ])

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
            "mensaje"=>"borrado";
            ])

    }
}
