<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/api/user")]
class UserApiController
{
    #[Route("/", name: "api_user_default")]
    public function index(Request $request): Response
    {
        dd($request->getContent());
    }
}