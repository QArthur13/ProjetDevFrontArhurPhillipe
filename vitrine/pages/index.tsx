import {NextPage} from "next";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";
import FooterComponent from "../components/FooterComponent";

const Home: NextPage = () => {

  return (

      <div>
          <HeadComponent/>
          <HeaderComponent/>
          <MainComponent/>
          <FooterComponent/>
      </div>

  );

}

export default Home;
