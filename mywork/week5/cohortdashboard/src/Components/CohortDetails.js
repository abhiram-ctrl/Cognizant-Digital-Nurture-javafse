import styles from "../CohortDetails.module.css";

function CohortDetails(props) {
    return (
        <div className={styles.box}>

            <h3
                style={{
                    color: props.status === "ongoing" ? "green" : "blue"
                }}
            >
                {props.title}
            </h3>

            <dl>
                <dt>Coach</dt>
                <dd>{props.coach}</dd>

                <dt>Status</dt>
                <dd>{props.status}</dd>

                <dt>Duration</dt>
                <dd>{props.duration}</dd>
            </dl>

        </div>
    );
}

export default CohortDetails;