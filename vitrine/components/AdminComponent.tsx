import React, { useEffect, useState } from "react";

const AdminComponent: React.FC = () => {

    const [loader, setLoader] = useState<boolean>(false);

    const fetchGet = async (url: string, token: any) => {
        
        const response = await fetch(url, {headers: {"authorization": `Bearer ${token}`}});

        return await response.json();

    };

    useEffect(() => {

        fetchGet("http://localhost:8000/api/.user/user", localStorage.getItem("token"))
            .then((response) => {
                
                console.log(response);

                if (response.user.role == "ROLE_ADMIN") {
                    
                    console.log("Bienvenue admin!");
                    setLoader(true);

                } else {

                    console.log("Vous n'êtes pas un admin!");

                }
            
            })
            .catch((error) => console.log(error))
        ;

    }, []);

    if (loader === true) {
        
        return (

            <div>
                <h1>Page en cours de construction!</h1>
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