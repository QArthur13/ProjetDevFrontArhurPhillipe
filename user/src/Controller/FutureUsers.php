<?php

namespace App\Controller;

use App\Repository\FutureUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/api/future-users", name: "app_future_users_api")]
class FutureUsers extends AbstractController
{
    #[Route("/", name: "api_future_users_default", methods: ["GET"])]
    public function index(FutureUserRepository $futureUserRepository): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_ADMIN");

        return $this->json(array(

            "data" => $futureUserRepository->findAll()

        ));
    }
}