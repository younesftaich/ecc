<?php

namespace App\Http\Controllers;

use App\Models\MyM3u;
use Illuminate\Http\Request;

class MyM3uController extends Controller
{
    //
    public function home()
    {
        return MyM3u::all();

    }

     public function find($id)
    {
        return $subid = MyM3u::where('subid', '=', $id)->first();

    }
}
