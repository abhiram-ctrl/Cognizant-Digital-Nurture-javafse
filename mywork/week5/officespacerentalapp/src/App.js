function App() {

  const heading = {
    color: "darkblue",
    textAlign: "center"
  };

  const offices = [
    {
      id: 1,
      name: "Tech Park Towers",
      rent: 55000,
      address: "Madhapur, Hyderabad",
      image: "/images/office.jpg"
    },
    {
      id: 2,
      name: "Cyber Heights",
      rent: 75000,
      address: "Gachibowli, Hyderabad",
      image: "/images/office.jpg"
    },
    {
      id: 3,
      name: "Business Square",
      rent: 42000,
      address: "Vijayawada",
      image: "/images/office.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={heading}>Office Space Rental App</h1>

      {
        offices.map((office) => (

          <div
            key={office.id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              width: "350px"
            }}
          >

            <img
              src={office.image}
              alt={office.name}
              width="300"
              height="180"
            />

            <h2>{office.name}</h2>

            <p>
              <b>Address:</b> {office.address}
            </p>

            <p>
              <b>Rent:</b>

              <span
                style={{
                  color: office.rent < 60000 ? "red" : "green",
                  fontWeight: "bold",
                  marginLeft: "8px"
                }}
              >
                ₹{office.rent}
              </span>

            </p>

          </div>

        ))
      }

    </div>
  );
}

export default App;