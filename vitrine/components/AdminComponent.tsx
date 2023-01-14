import React, { useEffect, useState } from "react";

const AdminComponent: React.FC = () => {

    const [loader, setLoader] = useState<boolean>(false);
    const [futureUser, setFutureUser] = useState<any>([]);

    const fetchGet = async (url: string, token: any) => {
        
        const response = await fetch(url, {headers: {"authorization": `Bearer ${token}`}});

        return await response.json();

    };

    const fetchData = async (url: string, data: any, token: any) => {

        const response = await fetch(url, {method: "POST", headers: {"authorization": `Bearer ${token}`, "Content-Type": "application/json"}, body: JSON.stringify(data)});

        return await response.json();

    }

    const handleValidButton = (id: string|number) => {

        console.log("ID: " + id);

        const data = {id: id};

        fetchData("http://localhost:8000/api/.user/register/valid-user", data, localStorage.getItem("token"))
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        ;

    }

    useEffect(() => {

        fetchGet("http://localhost:8000/api/.user/user", localStorage.getItem("token"))
            .then((response) => {
                
                //console.log(response);

                if (response.user.role == "ROLE_ADMIN") {

                    console.log("Bienvenue admin!");

                    fetchGet("http://localhost:8000/api/.user/future-users", localStorage.getItem("token"))
                        .then((response) => {

                            console.log(response.data);
                            setFutureUser(response.data);
                            setLoader(true);
                            //console.log(futureUser);

                        })
                        .catch((error) => console.log(error))
                    ;

                } else {

                    console.log("Vous n'êtes pas un admin!");

                }
            
            })
            .catch((error) => console.log(error))
        ;

    }, []);

    if (loader) {
        
        return (

            <div>
                <h1>Gestion Back-Office</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Nationalité</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {futureUser.map((value: any) => (

                        <tr key={value.id}>
                            <th>{value.id}</th>
                            <td>{value.email}</td>
                            <td>{value.lastname}</td>
                            <td>{value.firstname}</td>
                            <td>{value.phonenumber}</td>
                            <td>{value.country}</td>
                            {value.validity === true ? <td>Editer</td> : <td><button onClick={() => handleValidButton(value.id)}>Valdier</button></td>}
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>

        );

    }

    return (

        <div>
            <h1>Chargement du fetch</h1>
        </div>

    );

}

export default AdminComponent;