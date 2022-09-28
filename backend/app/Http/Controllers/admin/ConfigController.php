<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Config;

class ConfigController extends Controller
{
    public function get_config()
    {
        $data = Config::get();
        $config = array();
        foreach ($data as $key => $value) {
            $config[$value->key_name] = $value->value;
        }
        return response()->json([
            'status' => 200,
            'data' => $config,
        ],200);
    } // End get_config
}
