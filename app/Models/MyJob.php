<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyJob extends Model
{
    use HasFactory;
    protected $guarded = array();
    public $timestamps = false;
}
