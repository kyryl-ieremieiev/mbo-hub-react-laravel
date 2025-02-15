<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'image_path',
        'tag',
    ];

    /**
     * @param $value
     * @return string
     */
    function getImagePathAttribute($value) : string
    {
        return asset('storage/' . $value);
    }
}
