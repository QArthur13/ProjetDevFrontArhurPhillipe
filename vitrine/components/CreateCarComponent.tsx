import React, {useState} from "react";
import styles from "../styles/CreateCar.module.css";
import {ButtonComponent, InputComponent} from "my-lib-ui";
import {router} from "next/client";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const CreateCarComponent: React.FC = () => {

    const [nameCar, setNameCar] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [imageCar, setImageCar] = useState<string>("");

    const fetchData = async (url: string, data: any) => {

        const response = await fetch(url, {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem("token")}`}});

        return await response.json();

    }

    const handleChangeNameCar = (data: any) => {

        setNameCar(data);

    };
    const handleChangePrice = (data: any) => {

        setPrice(data);

    };
    const handleChangeImageCar = (data: any) => {

        setImageCar(data);

    };
    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log({nameCar: nameCar, price: price, imageCar: imageCar});
        const data = {name: nameCar, price: price, image: imageCar};

        fetchData("http://localhost:8000/api/.car/add-car", data)
            .then((response) => {

                console.log(response);
                router.push("/admin");

            })
            .catch((error) => console.log(error))
        ;

    };

    return (

        <div className={styles.mainCreateCar}>
            <form onSubmit={handleSubmit}>
                <InputComponent label={"Nom Voiture"} htmlFor={"nameCar"} type={"text"} value={nameCar} onChange={handleChangeNameCar}/>
                <InputComponent label={"Prix"} htmlFor={"price"} type={"number"} value={price} onChange={handleChangePrice}/>
                <InputComponent label={"Image Voiture"} htmlFor={"image"} type={"text"} value={imageCar} onChange={handleChangeImageCar}/>
                <ButtonComponent classes={styles.theButton} label={"Ajouter"} type={"submit"}/>
            </form>
        </div>

    );

}

export default CreateCarComponent;
