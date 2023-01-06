<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use App\Repository\FutureUserRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

#[Route("/api/register", name: "app_register_api")]
class RegisterApiController extends AbstractController
{
    #[Route("/", name: 'api_register_default', methods: ["POST"])]
    public function index(Request $request, SerializerInterface $serializer, ManagerRegistry $managerRegistry): JsonResponse
    {
        $entityManager = $managerRegistry->getManager();
        $futurUser = $serializer->deserialize($request->getContent(), FutureUser::class, "json");

        $futurUser->setValidity(false);
        $entityManager->persist($futurUser);
        $entityManager->flush();

        return $this->json(array("data" => $futurUser, "message" => "Votre compte est en attente de vérification!"));
    }
}