import { NextPage } from "next";
import AdminComponent from "../components/AdminComponent";
import HeadComponent from "../components/HeadComponent";

const Admin: NextPage = () => {

    return (

        <div>
            <HeadComponent/>
            <AdminComponent/>
        </div>

    );

}

export default Admin;