<?php

namespace App\Http\Controllers;

use App\Models\MyUser;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Http\Controllers\MySubscriptionController;
class MyUserController extends Controller
{
    //
     public function home()
    {
        return MyUser::all();

    }

    
    public function getallsubs($userid)
    {
       return  MyUser::where('id', '=', $userid)->first();
    
    }

    public function verifyemail($token)
    {
      $userid = MyUser::where('hash', '=', $token)->first();

        $userid->update([
       
            'verified' => "1"
        ]);

    
        return redirect('/completeprofile?email='.$userid->email);

    }
    public function idtoemail($userid)
    {
      return MyUser::where('id', '=', $userid)->first()->email;
   
    

    
    

    }
    public function profile(Request $request)
    {
      $userid = MyUser::where('email', '=', $request->email)->first();

        $userid->update([
       
            'name' => $request->name,
            'password' => $request->password,
        
        ]);
		
        return $userid->id;
    }


    public function checklogin(Request $request)
    {
        if ($result = MyUserController::userexist($request->email)){
        
           
        $email =  $request->email;
        $pass =  $request->password;
        $myuser = MyUser::where('email', '=', $email)->first();
        if ( $pass == $myuser->password){
            return 1;
        }
        else {
            return 2;
        }
        }

        else {
            return 0;
        }
      
    }

    public function userexist($email)
    {
      
      $user = MyUser::where('email', '=', $email)->first()  ;
      if ($user === null) {
        return "0";
      }
      return $user->id;
    }
    public function ismember(Request $request)
    {

        $email = $request->email;
      
      $user = MyUser::where('email', '=', $email)->first()  ;
      if ($user === null) {
        return "0";
      }
      return $user->id;
    }
    
 
public function resetpass($email ){
    if ($result = MyUserController::userexist($email)){

          $user = MyUser::where('email', '=', $email)->first()  ;
    $key= $user->hash;
          return   MySubscriptionController::resetpass( $email,$key);


        }


}
    

    public function createuser(Request $request)
    {

        
        if ($result = MyUserController::userexist($request->email)){

            return json_encode([
                'exist' => 1,
                'id' => $result, ]);
        }
    
      $key = '';
            $keys = array_merge(range(0, 9), range('a', 'z'));
        
            for ($i = 0; $i < 48; $i++) {
                $key .= $keys[array_rand($keys)];
            }
    
    $start = Carbon::now();
    $startdate = $start->format('d/m/Y');
    
    
        $myuser = MyUser::create([
            'email' => $request->email,
            'name' => $request->name,
            'hash' => $key,
            'date' => $startdate
        ]);

//         MySubscriptionController::verifyemail( $request->email,$key);

        return json_encode([
            'exist' => 0,
            'email' => $request->email,
            'token' => $key,
            'id' => $myuser->id, ]);

    }
    
   
}
