<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'published_at',
        'links',
    ];

    protected $casts = [
        'links' => 'array',
    ];
}
