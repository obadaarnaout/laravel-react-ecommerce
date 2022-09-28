<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Notifications;

class NotificationsController extends Controller
{
    public function get_notifications()
    {
        return response()->json([
            'status' => 200,
            'data' => Notifications::get(),
        ],200);
    }
}
