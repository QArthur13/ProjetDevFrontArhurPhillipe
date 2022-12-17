<?php

namespace App\DataFixtures;

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
        $user = new User();
        $admin = new User();

        $user
            ->setEmail("arthur.quaranta@youpi.fr")
            ->setPassword($this->passwordHasher->hashPassword($user, "toto"))
            ->setRoles(["ROLE_USER"])
        ;
        $manager->persist($user);

        $admin
            ->setEmail("ruthra@youpi.fr")
            ->setPassword($this->passwordHasher->hashPassword($admin, "toto"))
            ->setRoles(["ROLE_ADMIN"])
        ;
        $manager->persist($admin);

        $manager->flush();
    }
}
