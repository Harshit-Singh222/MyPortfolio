<?php

namespace App\Http\Controllers;


class DashboardController extends Controller
{
    public function home(): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('frontend/pages/Homepage');
    }

    public function about(): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('frontend/pages/About');
    }

    public function projects(): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('frontend/pages/Projects');
    }
}
