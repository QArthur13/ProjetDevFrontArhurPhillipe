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

                `<div class="vignette-auto" data-id="${value.id}">
                    <img src="${value.image}" alt="${value.id}" width="358" height="161" style="margin-left: 8px">
                    <div class="frame-2">
                        <p>${value.name}</p>
                        <p>à partir de <span style="color: #C00000">${value.price} €</span></p>
                        <button onclick="carDetail(${value.id})">Info</button>
                    </div>
                </div>`

        });

    })
    .catch((error) => console.log(error));
