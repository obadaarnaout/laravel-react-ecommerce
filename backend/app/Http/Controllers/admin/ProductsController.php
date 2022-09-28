<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\products;
use Validator;

class ProductsController extends Controller
{
    public function get_products()
    {
        return response()->json([
            'status' => 200,
            'data' => products::get(),
        ],200);
    }// End get_products

    public function get_products_by_type($type)
    {
        $input = ['type' => $type];
        $request_data = [
            'type' => 'required|exists:products,type'
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            return response()->json([
                'status' => 200,
                'data' => products::where('type',$type)->get(),
            ],200);
        }

        
    }// End get_products_by_type

    public function get_products_by_category($category_id)
    {
        $input = ['category_id' => $category_id];
        $request_data = [
            'category_id' => 'required|exists:products,category_id'
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            return response()->json([
                'status' => 200,
                'data' => products::where('category_id',$category_id)->get(),
            ],200);
        }

        
    }// End get_products_by_category

    public function get_products_by_sub_category($sub_category_id)
    {
        $input = ['sub_category_id' => $sub_category_id];
        $request_data = [
            'sub_category_id' => 'required|exists:products,sub_category_id'
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            return response()->json([
                'status' => 200,
                'data' => products::where('sub_category_id',$sub_category_id)->get(),
            ],200);
        }

        
    }// End get_products_by_sub_category

    public function get_products_by_id($id)
    {
        $input = ['id' => $id];
        $request_data = [
            'id' => 'required|exists:products,id'
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            return response()->json([
                'status' => 200,
                'data' => products::where('id',$id)->first(),
            ],200);
        }

        
    }// End get_products_by_id

    public function search($q)
    {
        $input = ['q' => $q];
        $request_data = [
            'q' => 'required'
        ];

        $validator = Validator::make($input, $request_data);

        if ($validator->fails()) {
            $errors = json_decode(json_encode($validator->errors()), 1);
            return response()->json([
                'status' => 400,
                'message' => array_reduce($errors, 'array_merge', array()),
            ],400);
        } else {
            return response()->json([
                'status' => 200,
                'data' => products::where('title','LIKE',"%{$q}%")->get(),
            ],200);
        }

        
    }// End search
}
