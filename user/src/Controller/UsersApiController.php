<?php

namespace App\Controller;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/api/users", name: "app_users_api")]
class UsersApiController extends AbstractController
{
    #[Route("/", name: "api_users_default", methods: ["GET"])]
    public function index(UserRepository $userRepository): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_ADMIN");

        return $this->json(array("data" => $userRepository->findAll()));
    }
}