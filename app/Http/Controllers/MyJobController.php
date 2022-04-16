<?php

namespace App\Http\Controllers;

use App\Models\MyJob;
use Illuminate\Http\Request;
use App\Http\Controllers\MySubscriptionController;

class MyJobController extends Controller
{
    public function createjob(Request $request)
    {
        $myjob = MyJob::create([
            'subid' => $request->subid,
            'type' => $request->type,
            'channels' => $request->channels,
            'plan' => $request->plan,
        ]);
        return $myjob;
        
    }

  
    public function activejob()
    {
        $jobs = MyJob::where('completed', '=', "no")->get();
        $numItems = count($jobs);
        $i = 0;
        echo "[";
        foreach (json_decode($jobs) as $job){
            $subinfo= MySubscriptionController::sub2($job->subid);
            echo json_encode([
                "job" => $job,
                "subinfo" => $subinfo
            ]);
           
            if(++$i !== $numItems) {
                echo ",";
              }
           
        }
        echo "]";
    }
}
