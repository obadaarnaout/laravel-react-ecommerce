<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\HomeSlider;

class HomeSliderController extends Controller
{
    public function get_sliders()
    {
        return response()->json([
            'status' => 200,
            'data' => HomeSlider::get(),
        ],200);
    }
}
