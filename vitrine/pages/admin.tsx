import { NextPage } from "next";
import AdminComponent from "../components/AdminComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const Admin: NextPage = () => {

    return (

        <div>
            <HeadComponent/>
            <HeaderComponent/>
            <AdminComponent/>
            <FooterComponent/>
        </div>

    );

}

export default Admin;