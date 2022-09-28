<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\admin\ContactUsController;
use App\Http\Controllers\admin\ConfigController;
use App\Http\Controllers\admin\CategoriesController;
use App\Http\Controllers\admin\ProductsController;
use App\Http\Controllers\admin\HomeSliderController;
use App\Http\Controllers\admin\NotificationsController;
use App\Http\Controllers\auth\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Visitor Routes
Route::get('/add_visitor', [VisitorController::class,'add_visitor']);

// ContactUs Routes
Route::post('/new_message', [ContactUsController::class,'new_message']);

// Config Routes
Route::get('/get_config', [ConfigController::class,'get_config']);

// Categories Routes
Route::get('/get_categories', [CategoriesController::class,'get_categories']);

// Products Routes
Route::get('/get_products_by_type/{type}', [ProductsController::class,'get_products_by_type']);
Route::get('/get_products_by_category/{category_id}', [ProductsController::class,'get_products_by_category']);
Route::get('/get_products_by_sub_category/{sub_category_id}', [ProductsController::class,'get_products_by_sub_category']);
Route::get('/get_products_by_id/{id}', [ProductsController::class,'get_products_by_id']);
Route::get('/search/{q}', [ProductsController::class,'search']);

// Home Slider Routes
Route::get('/get_sliders', [HomeSliderController::class,'get_sliders']);

// Notifications Routes
Route::get('/get_notifications', [NotificationsController::class,'get_notifications']);

// Auth Routes
Route::post('/login',[AuthController::class,'login']);
