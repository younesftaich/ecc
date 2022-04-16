<?php

namespace App\Http\Controllers;

use App\Models\MyInvoice;
use Illuminate\Http\Request;

class MyInvoiceController extends Controller
{
    public function find($id)
    {
        return $subid = MyInvoice::where('subid', '=', $id)->first();

    }
}
