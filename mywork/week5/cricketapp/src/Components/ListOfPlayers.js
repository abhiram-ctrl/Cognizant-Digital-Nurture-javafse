function ListOfPlayers() {

    const players = [
        { name: "Virat Kohli", score: 82 },
        { name: "Rohit Sharma", score: 95 },
        { name: "Shubman Gill", score: 66 },
        { name: "KL Rahul", score: 74 },
        { name: "Hardik Pandya", score: 58 },
        { name: "Ravindra Jadeja", score: 71 },
        { name: "Rishabh Pant", score: 69 },
        { name: "Suryakumar Yadav", score: 91 },
        { name: "Mohammed Siraj", score: 42 },
        { name: "Jasprit Bumrah", score: 77 },
        { name: "Kuldeep Yadav", score: 61 }
    ];

    const belowSeventy = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <ul>

                {
                    belowSeventy.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }

            </ul>

        </div>
    );
}

export default ListOfPlayers;