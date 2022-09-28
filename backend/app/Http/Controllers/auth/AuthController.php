<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Hash;
use Validator;
use DB;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            if (Auth::attempt($request->only('email','password'))) {
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;
                return response([
                    'message' => 'Successfully Login',
                    'token' => $token,
                    'user' => $user,
                ],200);
            }
            
        } catch (Exception $e) {
            return response([
                'message' => $e->getMessage()
            ],400);
        }

        return response([
            'message' => 'Invalid Email Or Password'
        ],400);
    } // End login Method
}
