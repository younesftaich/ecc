<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyUserController;
use App\Http\Controllers\MyJobController;
use App\Http\Controllers\MySubscriptionController;
use App\Models\MySubscription;

use App\Http\Controllers\MyM3uController;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('myusers', function() {
    return MyUserController::home();
});

Route::get('today', function() {
    return MySubscriptionController::today();
});
Route::get('lastmonth', function() {
    return MySubscriptionController::lastmonth();
});
Route::get('yesterday', function() {
    return MySubscriptionController::yesterday();
});

Route::get('carondate', function() {
 

$myformat = 'd/m/Y H:i:s';
  $start = Carbon::now();
echo "<br>";
echo $start->format($myformat);
      $expire = $start->addDays(1);
 echo $expire->format($myformat);
echo "<br>";
echo $start->format($myformat);
echo "<br>";
$mystartdate = "21/02/2022 7:08:24"; // li kayna f database

  $date2 = Carbon::createFromFormat($myformat, $mystartdate);
echo "now: ".$start;
echo "<br>";
echo "order date: ".$date2;
	   $result = $start->gt($date2);
echo "<br>";
        if($result){
        echo "expired";
        }






});

Route::get('userexist/{email}', function($email) {
    return MyUserController::userexist($email);
});
Route::post('checklogin', function(Request $request) {
   
    return MyUserController::checklogin($request);
});

Route::post('profile', function(Request $request) {
   
    return MyUserController::profile($request);
});

Route::get('mysubscriptions', function() {
    return MySubscriptionController::home();
});

Route::get('parse', function() {
    return MySubscriptionController::parse();
});

Route::get('countries', function() {
return DB::select('SELECT country FROM channels group by 1');

});

Route::get('channelsbycountry/{country}/{page}', function($country,$page) {

// set the number of items to display per page
$items_per_page = 21;

// build query
$offset = ($page - 1) * $items_per_page;


 $count2 = \DB::table('channels')->where('country', '=', $country)->count();

$alldata =  DB::select("SELECT * FROM channels where country = '$country' LIMIT " . $offset . "," . $items_per_page );

  $x = array(
        'total' => $count2,
        'channels' => $alldata,
  
    );

echo json_encode((object) $x); 


});

Route::get('insertchannels', function() {
$values = array('id' => 1,'channel' => 'channel','country' => 'Dayle','logo' => 'Dayle');
return DB::table('channels')->insert($values);



});

Route::get('resetpass/{email}', function($email) {
return MyUserController::resetpass( $email);
});


Route::get('killsubs', function() {


return MySubscriptionController::killsubs();
});


Route::get('jobdone/{id}', function($id) {
return MySubscriptionController::jobdone( $id);
});


Route::get('mysubscriptions/{uniqueid}', function($uniqueid) {
    return MySubscriptionController::sub($uniqueid);
});

Route::get('verify-email/{token}', function($token) {
    return MyUserController::verifyemail($token);
});

Route::post('mysubs/', function(Request $request) {
   
    return MySubscriptionController::subuser($request);
});
Route::get('emailid/{email}', function($email) {
   
    return MySubscriptionController::subuser($email);
});


Route::post('createsub', function(Request $request) {
   
    return MySubscriptionController::createsub($request);
});
Route::post('extend', function(Request $request) {
   
    return MySubscriptionController::extend($request);
});
Route::get('subunique/{id}', function($id) {
   
    return MySubscriptionController::sub($id);
});
Route::post('activatem3u/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::activatem3u($request,$id);
});

Route::post('activatemag/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::activatemag($request,$id);
});

Route::post('editm3u/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::editm3u($request,$id);
});

Route::get('paidsub/{uniqueid}', function($uniqueid) {
   
    return MySubscriptionController::paidsub($uniqueid);
});
Route::get('paidextend/{uniqueid}', function($uniqueid) {
   
    return MySubscriptionController::paidextend($uniqueid);
});

Route::get('setdate', function() {
   
    return MySubscriptionController::setdate2("15/01/2023",3);
});

Route::post('extendsub/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::extendsub($request,$id);
});


Route::post('createjob', function(Request $request) {
   
    return MyJobController::createjob($request);
});
Route::get('activejob', function() {
   
    return MyJobController::activejob();
});


Route::post('createuser', function(Request $request) {
   
    return MyUserController::createuser($request);
});

Route::get('myusers/{userid}', function($userid) {
   
    return MyUserController::getallsubs($userid);
});
Route::get('userexist/{email}', function($email) {
  
    return MyUserController::userexist($email);
});

Route::get('mym3us', function() {
    return MyM3uController::home();
});
