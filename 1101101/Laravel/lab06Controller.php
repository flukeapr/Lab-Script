<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class lab06Controller extends Controller
{
    //
    public function welcome($firstname=null, $lastname=null) {
        return view('index')
        ->with('firstname',$firstname)
        ->with('lastname', $lastname);
    }
    
}
