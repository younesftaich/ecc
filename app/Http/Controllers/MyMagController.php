<?php

namespace App\Http\Controllers;

use App\Models\MyMag;
use Illuminate\Http\Request;

class MyMagController extends Controller
{
    public function find($id)
    {
        return $subid = MyMag::where('subid', '=', $id)->first();

    }
}
