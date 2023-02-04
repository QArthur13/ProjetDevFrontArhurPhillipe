const getCars = async (url, token) => {

    const response = await fetch(url, {headers: {"Authorization": `Bearer ${token}`}});

    return await response.json();

};

const logout = () => {

    console.log("Déconnexion!");
    localStorage.clear();
    window.location.href = "index.html";

};

const carDetail = (id) => {

    localStorage.setItem("id", id);
    console.log(`Voir la voiture N°${id}`);
    window.location.href = "car.html";

}

getCars("http://localhost:8000/api/.car/car-get", localStorage.getItem("token"))
    .then((data) => {

        data.map((value) => {

            document.getElementById("cars-lists").innerHTML +=

                `<ul data-id="${value.id}">
                    <li>${value.name}</li>
                    <li>${value.price}</li>
                    <li><img src="${value.image}" alt="Voitures N°${value.id}"></li>
                    <li><button onclick="carDetail(${value.id})">Info</button></li>    
                </ul>`

        });

    })
    .catch((error) => console.log(error));
