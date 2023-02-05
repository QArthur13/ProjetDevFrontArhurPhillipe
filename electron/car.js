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

        let detail = document.getElementById("car-detail");
        detail.innerHTML += `<div data-id="${response[0].id}">
                                <p>${response[0].name}</p>
                                <img src="${response[0].image}" alt="${response[0].name}">
                            </div>`;

    })
    .catch((error) => console.log(error));
