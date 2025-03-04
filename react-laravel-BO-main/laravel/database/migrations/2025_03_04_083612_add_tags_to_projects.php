<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->json('tags')->nullable()->after('links');
        });
    }
    
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('tags');
        });
    }
    
};
