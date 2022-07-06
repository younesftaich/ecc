<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//CheckoutRedirect
Route::get('/checkout', function () {
    return Inertia::render('FastCheckout');
});
//CheckoutRedirect
Route::get('/order', function () {
    return Inertia::render('Order');
});
//CheckoutRedirect
Route::get('/ysf', function () {
    return Inertia::render('YsfHome');
});

Route::get('/installation', function () {
    return Inertia::render('Install');
});

Route::get('/copyrights', function () {
    return Inertia::render('Copyrights');
});

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});

Route::get('/terms', function () {
    return Inertia::render('Terms');
});

Route::get('/how-to-install-iptv-on-smart-tv', function () {
    return Inertia::render('Smarttv');
});

Route::get('/how-to-install-iptv-on-mag-box', function () {
    return Inertia::render('Mag');
});

Route::get('/how-to-install-iptv-on-mac-os', function () {
    return Inertia::render('Mac');
});

Route::get('/how-to-install-iptv-on-windows', function () {
    return Inertia::render('Windows');
});

Route::get('/how-to-install-iptv-on-ios', function () {
    return Inertia::render('Ios');
});

Route::get('/how-to-install-iptv-on-firestick-firetv', function () {
    return Inertia::render('Firestick');
});

Route::get('/how-to-install-iptv-on-android-smart-tv', function () {
    return Inertia::render('Android');
});

//Home2
Route::get('/', function () {
    return Inertia::render('YsfHome2');
});

Route::get('/channels', function () {
    return Inertia::render('YsfChannels');
});

Route::get('/countries', function () {
    return Inertia::render('YsfCountries');
});

Route::get('/payment', function () {
    return Inertia::render('Payment');
});

Route::get('/usd/payment', function () {
    return Inertia::render('PaymentUsd');
});

Route::get('/eur/payment', function () {
    return Inertia::render('PaymentEuro');
});


Route::get('/login', function () {
    return Inertia::render('YsfLogin');
});

Route::get('/account', function () {
    return Inertia::render('YsfAccount');
});

Route::get('/viewsub', function () {
    return Inertia::render('YsfViewSub');
});

Route::get('/editchannels', function () {
    return Inertia::render('Editsub2');
});

Route::get('/logout', function () {
    return Inertia::render('Logout');
});

//Extend
Route::get('/extend', function () {
    return Inertia::render('ExtendRedirect');
});

Route::get('/completed', function () {
    return Inertia::render('Completed');
});

Route::get('/completeprofile', function () {
    return Inertia::render('YsfComplete');
});

Route::get('/digitalextend', function () {
    return Inertia::render('DigitalExtend');
});

Route::get('/trial', function () {
return Redirect::to('https://benegrowthagency.com/checkout/trial.php?ott');


});
Route::get('/4k', function () {
return Redirect::to('https://bit.ly/3I5OiOe');


});


