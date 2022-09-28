<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\admin\SubCategories;

class Categories extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image'
    ];

    public function sub_categories()
    {
        return $this->hasMany(SubCategories::class, 'category_id', 'id');
    }
}
