<?php

namespace App\Http\Controllers;
use DB;

use Carbon\Carbon;
use GuzzleHttp\Client;


use App\Models\MyJob;
use App\Models\MySubscription;
use Illuminate\Http\Request;
use App\Http\Controllers\MyM3uController;
use App\Http\Controllers\MyUserController;
use App\Http\Controllers\MyMagController;
use App\Http\Controllers\MyInvoiceController;
use File;

class MySubscriptionController extends Controller
{
    //
    public function home()
    {
        return MySubscription::all();

    }
public function convertUtf8( $value ) {
    return mb_detect_encoding($value, mb_detect_order(), true) === 'UTF-8' ? $value : mb_convert_encoding($value, 'UTF-8');
}

public function countries(  ) {
return "ok";
}


  public function parse()
    {
  error_reporting(0);
ini_set('display_errors', 0);
// alltv.txt for all tv channels
// english.txt for all english vod channels
 $m3uarray = file(public_path('m3u/alltv.txt')) ;
 $tol = count($m3uarray);
  echo "[";
  for ( $i=0; $i<=count($m3uarray); $i++ ) {
  if ( $i % 2 == 0 ){
continue;
  }
  
   $string = $m3uarray[$i] ;
  
  if($string === null)
  continue;

  
  

$chunks = preg_match_all('/tvg-name="(.*?)"/', $string, $output_array);
$channel = $output_array[1][0];
  $id  = $i;
$chunks = preg_match_all('/group-title="(.*?)"/', $string, $output_array);
$country = $output_array[1][0];
$chunks = preg_match_all('/tvg-logo="(.*?)"/', $string, $output_array);
$logo = $output_array[1][0];
    $x = array(
        'id' => $id,
        'channel' => $channel,
        'country' => $country,
        'logo' => $logo,
    );
  
 DB::table('channels')->insert($x);


    //return (object) $x;
  
echo json_encode((object) $x); 
 echo ",";

  }
  
  echo "]";
 


    }

public function today(){
    $myformat = 'd/m/Y';

       $result = Carbon::createFromFormat($myformat, '20/02/2022');
$today = Carbon::now();
$start = Carbon::now();

       $yesterday = $start->subDays(1);
         $currentdate = $today->format($myformat);
	$total = 0;
    $subs = MySubscription::where('startdate', '=', $currentdate)->get();
	      foreach ($subs as $sub){
           if ($sub->paid == "yes" ){
           $total = $total + $sub->total;
           }
          
         
        }
return $total;

}
public function yesterday(){
    $myformat = 'd/m/Y';

       $result = Carbon::createFromFormat($myformat, '20/02/2022');
$today = Carbon::now();
$start = Carbon::now();

       $yesterday = $start->subDays(1);
         $currentdate = $yesterday->format($myformat);
	$total = 0;
    $subs = MySubscription::where('startdate', '=', $currentdate)->get();
	      foreach ($subs as $sub){
           if ($sub->paid == "yes" ){
           $total = $total + $sub->total;
           }
          
         
        }
return $total;

}
public function lastmonth(){

$myformat = 'd/m/Y';

       $result = Carbon::createFromFormat($myformat, '20/02/2022');
$today = Carbon::now();
$start = Carbon::now();

       $lastmonth = $start->subDays(30);
          $currentdate = $lastmonth->format($myformat);
	$total = 0;

    $subs = MySubscription::where('paid', '=', 'yes')->where('startdate', '!=', '')->get();
	      foreach ($subs as $sub){
              

           $result = $lastmonth->lt(Carbon::createFromFormat($myformat, $sub->startdate));
$total = $total+$sub->total;
        
          
         
        }
return $total;

}
    public function activatem3u(Request $request,$id)
    {
    $subid = MySubscription::where('id', '=', $id);
    $myformat = 'd/m/Y H:i:s';
$start = Carbon::now();
         $email =  MyUserController::idtoemail($subid->first()->userid);

        $plan = $subid->first()->plan;
        $dateobj = MySubscriptionController::setdate($plan);
    
    $dataupdate = [
       
            'status' => "Active",
            'active' => "yes",
            'startdate' => $dateobj->start,
            'expiredate' => $dateobj->expire,
            'username' => $request->username,
            'id4k' => $request->id4k,
            'password' => $request->password
        ];
    if ( $plan == 1 ) {
         MySubscriptionController::sendmail( $email,"1month.php",$subid->first()->uniqueid);
    }
    else  if ( $plan == 12 ) {
         MySubscriptionController::sendmail( $email,"12months.php",$subid->first()->uniqueid);
    }
    else  if ( $plan == 3 ) {
         MySubscriptionController::sendmail( $email,"3months.php",$subid->first()->uniqueid);
    }
    else  if ( $plan == 6 ) {
         MySubscriptionController::sendmail( $email,"6months.php",$subid->first()->uniqueid);
    }
    else  if ( $plan == 24 ) {
             MySubscriptionController::sendmail( $email,"24.php",$subid->first()->uniqueid);

    
       $startdate = $start->format($myformat);
         $expire = $start->addDays(1);
         $expiredate = $expire->format($myformat);
    
    
    $dataupdate = [
       
            'status' => "Active",
            'active' => "yes",
            'trial' => 1,
            'startdate' => $startdate,
            'expiredate' => $expiredate,
            'username' => $request->username,
            'id4k' => $request->id4k,
            'password' => $request->password
        ];
    }
    else  if ( $plan == 48 ) {
             MySubscriptionController::sendmail( $email,"48.php",$subid->first()->uniqueid);

    
       $startdate = $start->format($myformat);
         $expire = $start->addDays(2);
         $expiredate = $expire->format($myformat);
    
    
    $dataupdate = [
       
            'status' => "Active",
            'active' => "yes",
            'trial' => 1,
            'startdate' => $startdate,
            'expiredate' => $expiredate,
            'username' => $request->username,
            'id4k' => $request->id4k,
            'password' => $request->password
        ];
    }
    else  if ( $plan == 7 ) {
             MySubscriptionController::sendmail( $email,"7.php",$subid->first()->uniqueid);

    
       $startdate = $start->format($myformat);
         $expire = $start->addDays(7);
         $expiredate = $expire->format($myformat);
    
    
    $dataupdate = [
       
            'status' => "Active",
            'active' => "yes",
            'trial' => 1,
            'startdate' => $startdate,
            'expiredate' => $expiredate,
            'username' => $request->username,
            'id4k' => $request->id4k,
            'password' => $request->password
        ];
    }
    else  if ( $plan == 15 ) {
             MySubscriptionController::sendmail( $email,"15.php",$subid->first()->uniqueid);

    
       $startdate = $start->format($myformat);
         $expire = $start->addDays(15);
         $expiredate = $expire->format($myformat);
    
    
    $dataupdate = [
       
            'status' => "Active",
            'active' => "yes",
            'trial' => 1,
            'startdate' => $startdate,
            'expiredate' => $expiredate,
            'username' => $request->username,
            'id4k' => $request->id4k,
            'password' => $request->password
        ];
    }
        $subid->update($dataupdate);
        $jobid = MyJob::where('subid', '=', $id)->update([
            'completed' => "yes"
        ]);

        return $jobid;
    }

public function killsubs(){

$subsarray = MySubscription::where('trial' ,'=' ,1)->pluck('id')->toArray();

foreach ($subsarray as $sub ) {
        $currentsub =  MySubscription::where('id', '=', $sub)->first();

$myformat = 'd/m/Y H:i:s';
  $nowdate = Carbon::now();


   $expdate = Carbon::createFromFormat($myformat, $currentsub->expiredate);

 $result = $nowdate->gt($expdate);

        if($result){
        echo $sub." expired";

        $myRequest = new \Illuminate\Http\Request();
        $myRequest->setMethod('POST');
        $myRequest->request->add(['subid' => $sub]);
        $myRequest->request->add(['type' => "kill"]);

        return MyJobController::createjob($myRequest);
        }






}


}
public function jobdone ($id)  {
 $jobid = MyJob::where('subid', '=', $id)->update([
            'completed' => "yes"
        ]);
         MySubscription::where('id' ,'=' ,$id)->first()->delete();

        return $jobid;
}
    public function activatemag(Request $request,$id)
    {

        $subid = MySubscription::where('id', '=', $id);
        $plan = $subid->first()->plan;
        $dateobj = MySubscriptionController::setdate($plan);

        $subid->update([
            'startdate' => $dateobj->start,
            'expiredate' => $dateobj->expire,
            'status' => "Active",
            'active' => "yes",
            'portal' => $request->portal,
            'id4k' => $request->id4k,
            'mac' => $request->mac
        ]);
        $jobid = MyJob::where('subid', '=', $id)->update([
            'completed' => "yes"
        ]);

        return $jobid;
    }

    public function editm3u(Request $request,$id)
    {
        $subid = MySubscription::where('id', '=', $id)->update([
            'channels' => $request->channels
        ]);
        $jobid = MyJob::where('subid', '=', $id)->update([
            'completed' => "yes"
        ]);

        return $jobid;
    }
    
    public function setdate2($oldexpire,$plan)
    {
    
       $result = Carbon::createFromFormat('d/m/Y', $oldexpire);
       if ( $plan == 1){
        $final = $result->addMonths(1)->format('d/m/Y');
      }
      else if ( $plan == 3){
        $final = $result->addMonths(3)->format('d/m/Y');
      }
      else if ( $plan == 6){
        $final = $result->addMonths(6)->format('d/m/Y');
      }
      else if ( $plan == 12){
        $final = $result->addMonths(12)->format('d/m/Y');
      }
      else if ( $plan == 24){
        $final = $result->addDays(1)->format('d/m/Y');
      }
      else if ( $plan == 48){
        $final = $result->addDays(48)->format('d/m/Y');
      }
      else if ( $plan == 7){
        $final = $result->addDays(7)->format('d/m/Y');
      }
      else if ( $plan == 15){
        $final = $result->addDays(15)->format('d/m/Y');
      }
      $x = array(
     
        'expire' => $final,
    );
    return (object) $x;

    }
    public function setdate($plan)
    {
      
    $start = Carbon::now();
    $startdate = $start->format('d/m/Y');
      if ( $plan == 1){
      $expire = $start->addMonths(1);
      }
      else if ( $plan == 3){
        $expire = $start->addMonths(3);
        }
        else if ( $plan == 6){
          $expire = $start->addMonths(6);
          }
          else if ( $plan == 12){
            $expire = $start->addMonths(12);
            }
            else if ( $plan == 24){
              $expire = $start->addDays(1);
              }
            else if ( $plan == 48){
              $expire = $start->addDays(2);
              }
            else if ( $plan == 7){
              $expire = $start->addDays(7);
              }
            else if ( $plan == 15){
              $expire = $start->addDays(15);
              }
      $mytime2 = Carbon::parse("2022-04-15 16:21:05");
    //  echo($mytime2->addDays(1));
    $myDate = '15/01/2022';
    $result = Carbon::createFromFormat('d/m/Y', $startdate);
      $final = $result->addMonths(1)->format('d/m/Y');
        $x = array(
        'start' => $startdate,
        'expire' => $expire->format('d/m/Y'),
    );
    return (object) $x;

 
    }
    public function extendsub(Request $request = null,$id)
    {     
        $subid = MySubscription::where('id', '=', $id)->first();
   
        $oldid = $subid->oldid;
        $oldsubid = MySubscription::where('id', '=', $oldid)->first();
        $plan = $subid->plan;
             $email =  MyUserController::idtoemail($subid->userid);


        if ( $plan == 1 ) {
            MySubscriptionController::sendmail( $email,"1month.php",$subid->uniqueid);
       }
       else  if ( $plan == 12 ) {
            MySubscriptionController::sendmail( $email,"12months.php",$subid->uniqueid);
       }
       else  if ( $plan == 3 ) {
            MySubscriptionController::sendmail( $email,"3months.php",$subid->uniqueid);
       }
       else  if ( $plan == 6 ) {
            MySubscriptionController::sendmail( $email,"6months.php",$subid->uniqueid);
       }
        $oldexpire = $oldsubid->expiredate;
        $oldstart = $oldsubid->startdate;
       
      $myexpire = (string) $oldexpire;
        $dateobj = MySubscriptionController::setdate2($oldexpire,$plan);
       $dateobj->expire;

        $subid->update([
            
            'active' => "yes",
            'status' => "Active",
            'startdate' => $oldstart,
            'expiredate' => $dateobj->expire
        ]);

        $oldsubid->update([
            
            'hide' => 1
        ]);
        $jobid = MyJob::where('subid', '=', $id)->update([
            'completed' => "yes"
        ]);

        return $jobid;
    }

     public function createsub(Request $request)
    {
        $userid1 = MyUserController::createuser($request);
        $userid =  json_decode($userid1)->id;
        $exist =  json_decode($userid1)->exist;
   

   MySubscriptionController::sendmail( $request->email,"friendly.php",$request->uniqueid);
     
     $mysub = MySubscription::create([
            'uniqueid' => $request->uniqueid,
            'userid' => $userid,
            'plan' => $request->plan,
            'type' => $request->type,
            'status' => $request->status,
            'channels' => $request->channels,
            'currency' => $request->currency,
            'placeddate' => $request->placeddate,
            'packagename' => $request->packagename,
            'packageprice' => $request->packageprice,
            'proxyprice' => $request->proxyprice,
            'adultprice' => $request->adultprice,
            'total' => $request->total,
            'mac' => $request->mac
        ]);
    
     
     if ( $exist == 0 ) {
           $usermail =  json_decode($userid1)->email;
           $token =  json_decode($userid1)->token;
          $x = array(
        'email' => MySubscriptionController::verifyemail( $usermail,$token),
        'subid' => $mysub->id,
    );
    return (object) $x;
     
              


     }
           $x = array(
        'subid' => $mysub->id,
    );
    return (object) $x;
    }

    public function extend(Request $request)
    {
        $mysub = MySubscription::create([
            'uniqueid' => $request->uniqueid,
            'userid' => $request->userid,
            'plan' => $request->plan,
            'id4k' => $request->id4k,
            'extend' => $request->extend,
            'type' => $request->type,
            'status' => $request->status,
            'channels' => $request->channels,
            'placeddate' => $request->placeddate,
            'packagename' => $request->packagename,
            'packageprice' => $request->packageprice,
            'username' => $request->username,
            'password' => $request->password,
            'proxyprice' => $request->proxyprice,
            'adultprice' => $request->adultprice,
            'total' => $request->total,
            'portal' => $request->portal,
            'oldid' => $request->oldid,
            'mac' => $request->mac
        ]);
    
     
        $x = array(
            'subid' => $mysub->id,
        );
        return (object) $x;
    }

    public function resetpass($email,$token)
    {
          $client = new \GuzzleHttp\Client(array (
    'verify' => false
));
    $url=env('APP_URL')."/public/latest/mwzapi/mailwizz-php-sdk/examples/resetpass.php";
$body['email'] = $email;
$body['token'] = $token;

 $res = $client->post($url, [ 'body' => json_encode($body) ]);

return $code = $res->getStatusCode();
    }
    public function verifyemail($email,$token)
    {
          $client = new \GuzzleHttp\Client(array (
    'verify' => false
));
    $url=env('APP_URL')."/public/latest/mwzapi/mailwizz-php-sdk/examples/verifyemail.php";
$body['email'] = $email;
$body['token'] = $token;

 $res = $client->post($url, [ 'body' => json_encode($body) ]);

return $code = $res->getStatusCode();
    }
    public function sendmail($email,$link,$unique = "")
    {
        $client = new \GuzzleHttp\Client(array (
    'verify' => false
));
$url=env('APP_URL')."/public/latest/mwzapi/mailwizz-php-sdk/examples/".$link;
$body['email'] = $email;
$body['unique'] = $unique;

$res = $client->post($url, [ 'body' => json_encode($body) ]);

$code = $res->getStatusCode();
if ( $code != 200){
    $this->sendmail($email,$link,$unique);
}
    }

    public function paidsub($uniqueid)
    {
      //  MySubscriptionController::sendmail("fastiptvshop@gmail.com","verifyemail.php");
        

        $mysub = MySubscription::where('uniqueid', '=', $uniqueid);
    
         $email =  MyUserController::idtoemail($mysub->first()->userid);


      MySubscriptionController::sendmail( $email,"beingprocessed.php",$uniqueid);

     $checkpaid = $mysub->first()->paid;
     if ($checkpaid == "yes"){
       
        
        
         return "paid";
     }
        $mysub->update([
            'active' => "yes",
            'paid' => "yes",
            'status' => "Paid , Waiting Activation"
        ]);
        $subid= MySubscription::where('uniqueid', '=', $uniqueid)->first()->id;
        $myRequest = new \Illuminate\Http\Request();
        $myRequest->setMethod('POST');
        $myRequest->request->add(['subid' => $subid]);
        $myRequest->request->add(['type' => "create"]);
        
        return MyJobController::createjob($myRequest);
        
    }
    
    public function paidextend($uniqueid)
    {
      
        $mysub = MySubscription::where('uniqueid', '=', $uniqueid);
     $checkpaid = $mysub->first()->paid;
     $mysubid = $mysub->first()->id;

     if ($checkpaid == "yes"){
         return "paid";
     }
        $mysub->update([
            'active' => "yes",
            'paid' => "yes",
            'status' => "Paid , Waiting Activation"
        ]);
        $subid= MySubscription::where('uniqueid', '=', $uniqueid)->first()->id;
        $plan= MySubscription::where('uniqueid', '=', $uniqueid)->first()->plan;
        $myRequest = new \Illuminate\Http\Request();
        $myRequest->setMethod('POST');
        $myRequest->request->add(['subid' => $subid]);
        $myRequest->request->add(['plan' => $plan]);
        $myRequest->request->add(['type' => "extend"]);
        
       
        $x = array(
            'subid' => $mysubid,
            'job' => MyJobController::createjob($myRequest)
        );
        return (object) $x;
    }
    public function sub($unique)
    {
        $subid = MySubscription::where('uniqueid', '=', $unique)->first()->id;
        $type = MySubscription::where('uniqueid', '=', $unique)->first()->type;
       
        $invoice = MyInvoiceController::find($unique);
        if ( $type == "mag"){
            $mac = MySubscription::where('uniqueid', '=', $unique)->first()->mac;
            $portal = MySubscription::where('uniqueid', '=', $unique)->first()->portal;
       return $allinfos = MySubscription::where('uniqueid', '=', $unique)->first();
        
       return json_encode([
            'mac' => $mac,
            'portal' => $portal,
            'infos' => $allinfos, ]);
        }
        else {
            $username = MySubscription::where('uniqueid', '=', $unique)->first()->username;
            $password = MySubscription::where('uniqueid', '=', $unique)->first()->password;

            return   $allinfos = MySubscription::where('uniqueid', '=', $unique)->first();
        return json_encode([
            'username' => $username,
            'password' => $password,
            'infos' => $allinfos, ]);
        }
        

    }
    
    public function sub2($unique)
    {
        $subid = MySubscription::where('id', '=', $unique)->first()->id;
        $type = MySubscription::where('id', '=', $unique)->first()->type;
       
        $invoice = MyInvoiceController::find($unique);
        if ( $type == "mag"){
            $mac = MySubscription::where('id', '=', $unique)->first()->mac;
            $portal = MySubscription::where('id', '=', $unique)->first()->portal;
       $allinfos = MySubscription::where('id', '=', $unique)->first();
        return json_encode([
            'mac' => $mac,
            'portal' => $portal,
            'infos' => $allinfos, ]);
        }
        else {
            $username = MySubscription::where('id', '=', $unique)->first()->username;
            $password = MySubscription::where('id', '=', $unique)->first()->password;

       $allinfos = MySubscription::where('id', '=', $unique)->first();
        return json_encode([
            'username' => $username,
            'password' => $password,
            'infos' => $allinfos, ]);
        }
        

    }
    public function subuser(Request $request)
    {

       $userid2 =  MyUserController::userexist($request->email);

       $subs = MySubscription::where('userid', '=', $userid2)->get();
       $numItems = count($subs);
       $i = 0;

        echo "[";
        foreach ($subs as $sub){
           
           echo MySubscriptionController::sub($sub->uniqueid);
           if(++$i !== $numItems) {
            echo ",";
          }
        }
        echo "]";
        

    }
}
