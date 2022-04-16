<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMySubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('my_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('userid');
            $table->string('startdate');
            $table->string('expiredate');
            $table->string('status');
            $table->string('type');
            $table->json('channels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('my_subscriptions');
    }
}
