<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (Schema::hasColumn('projects', 'tags')) {
                $table->dropColumn('tags');
            }
        });

        Schema::table('events', function (Blueprint $table) {
            if (Schema::hasColumn('events', 'tags')) {
                $table->dropColumn('tags');
            }
        });

        Schema::table('skills', function (Blueprint $table) {
            if (Schema::hasColumn('skills', 'tags')) {
                $table->dropColumn('tags');
            }
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (!Schema::hasColumn('projects', 'tags')) {
                $table->json('tags')->nullable();
            }
        });

        Schema::table('events', function (Blueprint $table) {
            if (!Schema::hasColumn('events', 'tags')) {
                $table->json('tags')->nullable();
            }
        });

        Schema::table('skills', function (Blueprint $table) {
            if (!Schema::hasColumn('skills', 'tags')) {
                $table->json('tags')->nullable();
            }
        });
    }
};
