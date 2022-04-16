<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMyInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('my_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('subid');
            $table->string('userid');
            $table->string('date');
            $table->string('paid');
            $table->string('packagename');
            $table->string('proxyname');
            $table->string('adultname');
            $table->string('packageprice');
            $table->string('proxyprice');
            $table->string('adultprice');
            $table->string('total');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('my_invoices');
    }
}
