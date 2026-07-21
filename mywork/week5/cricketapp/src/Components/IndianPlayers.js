function IndianPlayers() {

    const team = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    const oddTeam = [];
    const evenTeam = [];

    team.forEach((player, index) => {
        if (index % 2 === 0) {
            oddTeam.push(player);
        } else {
            evenTeam.push(player);
        }
    });

    const T20Players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Suryakumar Yadav"
    ];

    const RanjiPlayers = [
        "Prithvi Shaw",
        "Sarfaraz Khan",
        "Cheteshwar Pujara"
    ];

    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>

            <ul>
                {
                    oddTeam.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                {
                    evenTeam.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

            <h2>Merged Players</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default IndianPlayers;