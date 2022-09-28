<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Categories;

class CategoriesController extends Controller
{
    public function get_categories()
    {
        return response()->json([
            'status' => 200,
            'data' => Categories::with('sub_categories')->get(),
        ],200);
    } // End get_categories
}
