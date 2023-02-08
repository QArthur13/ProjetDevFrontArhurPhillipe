const getCar = async () => {

    const response = await fetch("http://localhost:8000/api/.car/car"+localStorage.getItem("id"), {

        headers: {

            "Authorization": localStorage.getItem("token")

        }

    });

    return await response.json();

}

getCar()
    .then((response) => {

        console.log(response);

        document.querySelector("h1").innerHTML = response[0].name.toUpperCase();

        let image = document.getElementById("car-image");
        image.src = response[0].image;
        image.alt = `Voiture N°${response[0].id}`;

    })
    .catch((error) => console.log(error));
