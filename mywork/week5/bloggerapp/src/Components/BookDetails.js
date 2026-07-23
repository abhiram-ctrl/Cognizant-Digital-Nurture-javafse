function BookDetails() {

    const books = [
        {
            id: 1,
            name: "Clean Code",
            author: "Robert C. Martin",
            price: 650
        },
        {
            id: 2,
            name: "Effective Java",
            author: "Joshua Bloch",
            price: 720
        },
        {
            id: 3,
            name: "Spring in Action",
            author: "Craig Walls",
            price: 810
        }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>₹{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookDetails;