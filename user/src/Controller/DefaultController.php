<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/")]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default', methods: ["GET"])]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/hello', name: 'app_default_api', methods: ["GET"])]
    public function indexApi(): Response
    {
        return new JsonResponse(array("message" => "Bienvenue sur l'api du microservice! :)"));
    }
}
