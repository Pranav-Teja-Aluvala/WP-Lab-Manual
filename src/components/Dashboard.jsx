import ThemeToggle from "./ThemeToggle";
import RegistrationForm from "./RegistrationForm";
import Clock from "./Clock";
import PopupEP1 from "./PopupEP1";

import "../styles/dashboard.css";
import "../styles/theme.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <h1 className="title">
                React SP10–SP13 Dashboard
            </h1>

            <div className="grid">

                <ThemeToggle />
                <RegistrationForm />
                <Clock />
                <PopupEP1 />

            </div>

        </div>
    );
}

export default Dashboard;