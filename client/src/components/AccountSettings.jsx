import { useState, useEffect, react } from "react";
import { icons, theme } from "../utils/constants";


const AccountSettings = () => {

    const pageRoot = document.getElementById('root');

    const [themeToggle, setThemeToggle] = useState(false);

    useEffect(() => {
        pageRoot.style.backgroundColor = theme.dark;
    }, []);

    return (
        <div onClick={() => {
            setThemeToggle(!themeToggle);
            return themeToggle ? pageRoot.style.backgroundColor = theme.dark : pageRoot.style.backgroundColor = theme.light;
        }
        }>
            {icons.account}
        </div >
    );


};

export default AccountSettings;