import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css"
import {ButtonComponent} from "my-lib-ui";
import {router} from "next/client";
import {useRouter} from "next/router";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const AdminComponent: React.FC = () => {

    const [loader, setLoader] = useState<boolean>(false);
    const [futureUser, setFutureUser] = useState<any>([]);
    const [cars, setCars] = useState<any>([]);
    const [changeTable, setChangeTable] = useState<boolean>(true);

    const router = useRouter();

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

    const handleDeleteCarButton = (id: any) => {

        const data = {id: id};
        console.log(data);

        fetchData("http://localhost:8000/api/.car/car-del", data, localStorage.getItem("token"))
            .then((response => console.log(response)))
            .catch((error) => console.log(error))
        ;

    }

    const handleChangeTable = () => setChangeTable(!changeTable);

    useEffect(() => {

        fetchGet("http://localhost:8000/api/.user/user", localStorage.getItem("token"))
            .then((response) => {
                
                console.log(response);

                if (response.message) {

                    console.log("Redirige vers la page de co!");
                    localStorage.removeItem("token");
                    router.push("/login");

                } else {

                    if (response.user.role == "ROLE_ADMIN") {

                        console.log("Bienvenue admin!");

                        fetchGet("http://localhost:8000/api/.user/future-users", localStorage.getItem("token"))
                            .then((response) => {

                                console.log(response.data);
                                setFutureUser(response.data);
                                setLoader(true);
                                //console.log(futureUser);

                            })
                            .catch((error) => {

                                //console.log(error);
                                localStorage.removeItem("token");
                                router.push("/login");

                            })
                        ;

                        fetchGet("http://localhost:8000/api/.car/car-get", localStorage.getItem("token"))
                            .then((response) => {

                                console.log(response);
                                setCars(response);
                                //setCars([{"id": 1, "name": "Ford", "price": 10000}]);
                                setLoader(true);
                                //console.log(futureUser);

                            })
                            .catch((error) => console.log(error))
                        ;

                    } else {

                        console.log("Vous n'êtes pas un admin!");

                    }

                }
            
            })
            .catch((error) => console.log(error))
        ;

    }, []);

    if (loader) {

        if (changeTable) {

            return (

                <div>
                    <h1 className={styles.titlePage}>Gestion Back-Office</h1>
                    <div className={styles.mainPage}>
                        <ButtonComponent classes={styles.theButton} label={"Voitures"} type={"button"} onClick={handleChangeTable}/>
                        <table className={styles.tableFutureUsers}>
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
                                    {value.validity === true ? <td>Validé</td> : <td>En attente</td>}
                                    {value.validity === true ? <td><ButtonComponent classes={styles.theButton} label={"Editer"} type={"button"}/></td> : <td><ButtonComponent label={"Valider"} type={"button"} onClick={() => handleValidButton(value.id)}/></td>}
                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            );

        } else {

            return (

                <div>
                    <h1 className={styles.titlePage}>Gestion Back-Office</h1>
                    <ButtonComponent classes={styles.theButton} label={"Utilisateurs"} type={"button"} onClick={handleChangeTable}/>
                    <ButtonComponent classes={styles.theButton} label={"Ajouter une voiture"} type={"button"} onClick={() => router.push("/createCar")}/>
                    <div className={styles.mainPage}>
                        <table className={styles.tableFutureUsers}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cars.map((value: any) => (

                                <tr key={value.id}>
                                    <th>{value.id}</th>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td><ButtonComponent classes={styles.theButton} label={"Supprimer la voiture N°"+value.id} type={"button"} onClick={() => handleDeleteCarButton(value.id)}/></td>
                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            );

        }
        
        /*return (

            <div>
                <h1 className={styles.titlePage}>Gestion Back-Office</h1>
                <div className={styles.mainPage}>
                    <table className={styles.tableFutureUsers}>
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
                                {value.validity === true ? <td>Validé</td> : <td>En attente</td>}
                                {value.validity === true ? <td><ButtonComponent classes={styles.theButton} label={"Editer"} type={"button"}/></td> : <td><ButtonComponent label={"Valider"} type={"button"} onClick={() => handleValidButton(value.id)}/></td>}
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        );*/

    }

    return (

        <div>
            <h1 style={{textAlign: "center"}}>Chargement du fetch</h1>
        </div>

    );

}

export default AdminComponent;
