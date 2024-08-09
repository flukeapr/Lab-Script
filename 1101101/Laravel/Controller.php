<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;

 class Controller  extends BaseController
{
    //
    public function welcome($firstname=null, $lastname=null) {
        return "<h1>Welcome to {$firstname}  {$lastname} homepage</h1>".'<h3>this first time ti run Laravel Framework.</h3>';
        }
       
}

