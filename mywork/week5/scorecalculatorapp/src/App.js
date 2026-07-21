import React from "react";

import CalculateScore from "./Components/CalculateScore";

function App() {

    return (

        <div>

            <CalculateScore

                name="Abhiram"

                school="SRKR Engineering College"

                total={450}

                goal={5}

            />

        </div>

    );
}

export default App;