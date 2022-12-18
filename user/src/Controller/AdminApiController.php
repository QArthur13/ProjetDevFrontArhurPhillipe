<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin', name: 'app_admin_api')]
class AdminApiController extends AbstractController
{
    #[Route("/", name: 'api_admin_default', methods: ["GET"])]
    public function index(): JsonResponse|Response
    {
        $user = $this->getUser();
        $hasAccess = $this->isGranted('ROLE_ADMIN');

        if ($hasAccess) {

            return new JsonResponse(array(

                "Message" => "Bienvenue administrateur!",
                "Email" => $user->getUserIdentifier(),
                "Role" => $user->getRoles()

            ));

        } else {

            return new Response(json_encode(array(

                "Type" => "Erreur",
                "status" => false,
                "Message" => "Vous n'etes pas admin!"

            )), Response::HTTP_UNAUTHORIZED);

        }
    }
}