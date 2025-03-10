<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'date',
        'location',
        'image',
        'tags',
    ];
    
    protected $casts = [
        'tags' => 'array',
    ];

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
    
}
