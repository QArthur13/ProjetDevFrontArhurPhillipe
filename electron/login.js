const formLogin = document.querySelector("form");

const fetchData = async (data) => {

    const response = await fetch("http://localhost:8000/api/.user/login", {

        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
        }
    );

    return await response.json();

}

formLogin.addEventListener("submit", (event) => {

    console.log("Connexion en cours!")
    event.preventDefault();

    const formData = new FormData(formLogin);
    const data = {username: formData.get("username"), password: formData.get("password")};

    fetchData(data)
        .then((response) => {

            localStorage.setItem("token", response.token);
            window.location.href = "cars.html";

        })
        .catch((error) => console.log(error))
    ;

});
