import { useState } from "react";

function CurrencyConverter() {

    const [rupees, setRupees] = useState("");
    const [euros, setEuros] = useState("");

    const convertToEuro = () => {

        if (rupees === "") {
            alert("Please enter amount");
            return;
        }

        const result = (parseFloat(rupees) / 95).toFixed(2);
        setEuros(result);
    };

    return (
        <div>

            <h2>Currency Converter</h2>

            <input
                type="number"
                placeholder="Enter amount in Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <br /><br />

            <button onClick={convertToEuro}>
                Convert to Euro
            </button>

            <h3>Euro: € {euros}</h3>

        </div>
    );
}

export default CurrencyConverter;