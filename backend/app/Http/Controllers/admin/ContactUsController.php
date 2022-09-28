<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\ContactUs;
use Carbon\Carbon;
use Validator;

class ContactUsController extends Controller
{
    public function new_message(Request $request)
    {
        $input = $request->all();
        $request_data = [
            'email' => 'required|email',
            'name' => 'required',
            'message' => 'required',
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            ContactUs::insert([
                'email' => $request->email,
                'name' => $request->name,
                'message' => $request->message,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            return response()->json([
                'status' => 200,
                'message' => 'Message Successfully sent',
            ],200);

        }
    }// End new_message
}
