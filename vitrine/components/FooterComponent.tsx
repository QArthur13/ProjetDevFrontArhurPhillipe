import React from "react";
import styles from "../styles/Index.module.css";

const FooterComponent: React.FC = () => {

    return (

        <footer className={styles.mainFooter}>
            <p>Contact</p>
            <p>Conditions générales pdf</p>
            <p>RIDE 2022 - tout droits réservés</p>
        </footer>

    );

};

export default FooterComponent;
