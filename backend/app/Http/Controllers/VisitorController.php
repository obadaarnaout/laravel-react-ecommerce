<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;
use Carbon\Carbon;

class VisitorController extends Controller
{
    public function add_visitor($value='')
    {
        $visitor_data = Visitor::where('ip_address',$_SERVER['REMOTE_ADDR'])->first();
        if (empty($visitor_data)) {
            Visitor::insert(['ip_address' => $_SERVER['REMOTE_ADDR'],
                             'created_at' => Carbon::now(),
                             'updated_at' => Carbon::now()]);
        }
        else{
            Visitor::where('ip_address',$_SERVER['REMOTE_ADDR'])->update(['updated_at' => Carbon::now()]);
        }
        return response()->json([
                                    'status' => 200,
                                    'message' => 'Visitor Successfully added'
                                ],200);
    } // End get_visitor
}
