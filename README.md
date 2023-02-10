# ProjetDevFrontArhurPhillipe

D'abord cloner le projet.

Une fois cloner faire un git branch Arthur (le projet se situe dans cette branche la)

Une fois dans la branche Arthur, dans les dossier my-lib-ui, proxy et vitrine faite un npm install pour télécharger les dépendances du projet.

Pour lancer les storybook, aller dans le dossier my-lib-ui puis faite un npm run storybook.

Pour lancer le projet, vous devez d'abord faire un docker compose build up -d.

Une fois que le Docker est en marche, faite cette commande docker compose exec user bash et une fois dans le terminal lancer cette commande composer install.

Le proxy sera automatiquement en marche avec Docker, dans le dossier vitrine faite npm run dev pour lancer la page.

# Rendu N°2
- Liste des captures d'écran d'Insomia:
  - API Default
    - Requête:
    - ![request API default](image/renduN2/Api1/Capture1.PNG "request API default")
    - Réponse:
    - ![response API default](image/renduN2/Api1/Capture2.PNG "response API default")
  - API User Default
    - Requête:
    - ![request API User default](image/renduN2/Api2/Capture1.PNG "request API User default")
    - Réponse:
    - ![response API User default](image/renduN2/Api2/Capture2.PNG "response API User default")
  - API Login
    - Requête:
    - ![request API login](image/renduN2/Api3/Capture1.PNG "request API login")
    - Réponse:
    - ![response API login](image/renduN2/Api3/Capture2.PNG "response API login")
  - API Get User
    - Requête:
    - ![request API login](image/renduN2/Api4/Capture1.PNG "request API login")
    - Réponse:
    - ![response API login](image/renduN2/Api4/Capture2.PNG "response API login")
  - API Check Role
    - Requête:
    - ![request API login](image/renduN2/Api5/Capture1.PNG "request API login")
    - Token:
    - ![Token API](image/renduN2/Api5/Capture2.PNG "TOKEN API")
    - Réponse:
    - ![response API login](image/renduN2/Api5/Capture3.PNG "response API login")
  - API Check Admin
    - Requête:
    - ![request API Check Admin](image/renduN2/Api6/Capture1.PNG "request API Check Admin")
    - Réponse:
    - ![response API Check Admin](image/renduN2/Api6/Capture2.PNG "response API Check Admin")
  - API Future User
    - Requête:
    - ![request API Future User](image/renduN2/Api7/Capture1.PNG "request API Future User")
    - Réponse:
    - ![response API Future User](image/renduN2/Api7/Capture2.PNG "response API Future User")
  - API New User
    - Requête:
    - ![request API Future User](image/renduN2/Api8/Capture1.PNG "request API Future User")
    - Réponse:
    - ![response API Future User](image/renduN2/Api8/Capture2.PNG "response API Future User")
  - API Valid User
    - Requête:
    - ![request API New User](image/renduN2/Api9/Capture1.png "request API New User")
    - Token:
    - ![TOKEN API](image/renduN2/Api9/Capture2.png "Token Api")
    - Réponse:
    - ![response API New User](image/renduN2/Api9/Capture3.png "response API New User")
  - API All Users
    - Requête:
    - ![request API All Users](image/renduN2/Api10/Capture1.png "request API All Users")
    - Réponse:
    - ![response API All Users](image/renduN2/Api10/Caputre2.png "response API All Users")

- Admin 
  - Connexion:
  - ![Connexion](image/renduN2/AdminCo/img.png "Connexion Admin")
  - Validation:
  - ![Pre validation](image/renduN2/AdminPreValid/img.png "Pre-validation Admin")
  - Validé:
  - ![Post validation](image/renduN2/AdminPostValid/img.png "Post-validation Admin")


# Rendu N°3
- Car
  - Ajouter une voiture :
    - ![Add Car](image/renduN3/createCar.png "Add Car")
  - Supprimer une voiture :
    - ![Delete Car](image/renduN3/deleteCar.png "Delete Car")
  - Avant la suppression:
    - ![Pre Delete Car](image/renduN3/allCars.png "Pre Delete Car")
  - Après la suppression :
    - ![Post Delete Car](image/renduN3/postDeleteCar.png "Post Delete Car")
- Electron
  - Login:
    - !["Login"](image/renduN3/login.png "login")
  - All Cars:
    - !["All Cars"](image/renduN3/allCarsElectron.png "All Cars")
  - One Car:
    - ![Car Detail](image/renduN3/carDetail.png "Car Detail")
