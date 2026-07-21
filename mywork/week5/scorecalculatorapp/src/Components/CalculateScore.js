import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="container">

            <h1 className="heading">
                Student Score Calculator
            </h1>

            <h3>Name : {props.name}</h3>

            <h3>School : {props.school}</h3>

            <h3>Total Marks : {props.total}</h3>

            <h3>Subjects : {props.goal}</h3>

            <h2 className="result">
                Average Score : {average}
            </h2>

        </div>
    );
}

export default CalculateScore;