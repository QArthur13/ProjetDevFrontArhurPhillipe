<?php

namespace App\DataFixtures;

use App\Entity\FutureUser;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = new FutureUser();
        $admin = new User();

        $user
            ->setLastname("atnarauq")
            ->setFirstname("ruthra")
            ->setEmail("ruthra@youpi.fr")
            ->setCountry("France")
            ->setPhonenumber("+33698988858")
            ->setValidity(true)
        ;
        $manager->persist($user);

        $admin
            ->setEmail($user->getEmail())
            ->setPassword($this->passwordHasher->hashPassword($admin, "toto"))
            ->setRoles(["ROLE_ADMIN"])
            ->setFutureUser($user)
        ;
        $manager->persist($admin);

        $manager->flush();
    }
}
