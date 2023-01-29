import {NextPage} from "next";
import HeaderComponent from "../components/HeaderComponent";
import HeadComponent from "../components/HeadComponent";
import FooterComponent from "../components/FooterComponent";
import CreateCarComponent from "../components/CreateCarComponent";

const CreateCar: NextPage = () => {

    return (

        <div>
            <HeadComponent/>
            <HeaderComponent/>
            <CreateCarComponent/>
            <FooterComponent/>
        </div>

    );

};

export default CreateCar;
