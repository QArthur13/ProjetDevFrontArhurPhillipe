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
        detail.innerHTML += `<ul data-id="${response[0].id}">
                                <li>${response[0].name}</li>
                                <li><img src="${response[0].image}" alt="${response[0].name}"></li>
                                <li>${response[0].price}</li>
                            </ul>`;

    })
    .catch((error) => console.log(error));
