<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/api/user', name: 'app_user_api')]
class UserApiController extends AbstractController
{
    #[Route('/', name: "api_user_default", methods: ["GET"])]
    public function index(): JsonResponse
    {
        $user = $this->getUser();

        return new JsonResponse(array(

            "Utilisateur" => array(

                "Email" => $user->getUserIdentifier(),
                "Role" => $user->getRoles()[0]

            )

        ));
    }

    #[Route('/checkRole', name: "api_user_checkRole", methods: ["POST"])]
    public function checkRole(Request $request): JsonResponse|Response
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent());

        if ($data->{'role'} === "") {

            return new Response(json_encode(array(

                "Type" => "Erreur",
                "status" => false,
                "Message" => "Role manquant!"

            )), Response::HTTP_BAD_REQUEST);

        } else {

            if ($data->{'role'} === $user->getRoles()[0]) {

                return new JsonResponse(array(

                    "email" => $user->getUserIdentifier(),
                    "Role" => $user->getRoles()[0]

                ));

            } else {

                return new Response(json_encode(array(

                    "Type" => "Erreur",
                    "status" => false,
                    "Message" => "Mauvais role!"

                )), Response::HTTP_BAD_REQUEST);

            }

        }

    }
}