import React from "react";
import { connect } from "react-redux";
import { addorder, resetfilter, resettablenumber } from "../Action";

const foodItems = [
    { category: "PIZZA", prize: 200, id: 1, name: "Pizza", image: "/pizza.jpeg" },
    { category: "COLD-DRINKS", prize: 50, id: 2, name: "Coke-Drink", image: "/Plain_Cold_Drink.jpg" },
    { category: "VEG", prize: 150, id: 3, name: "Paneer-Biryani", image: "/veg.jpg" },
    { category: "NON-VEG", prize: 250, id: 4, name: "Chicken-Biryani", image: "/nonveg.jpg" },
];

const Card = ({ filter_name, table_number, addorder, resetfilter, resettablenumber }) => {
    const filteredItems = filter_name === "All"
        ? foodItems
        : foodItems.filter((item) => item.category.toUpperCase() === filter_name.toUpperCase());

        const handleOrder = (id, prize, name, image) => {
            if (table_number !== null) {
                const newOrder = { id, prize, name, table_number, image }; // ✅ Include image
                console.log("Dispatching order:", newOrder); // Debugging
                addorder(id, prize, name, table_number, image);
                resettablenumber();
                resetfilter();
                alert("Order added successfully");
            } else {
                alert("Please select a table number");
            }
        };
        

    return (
        <div>
            <center>
                <h1>Food Items</h1>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <div key={item.id} style={{
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    margin: "10px",
                                    width: "200px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                                    transition: "transform 0.3s",
                                    cursor: "pointer",
                                    backgroundColor: "white"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
                                <h3>{item.name}</h3>
                                <p>Price: {item.prize}</p>
                                <button className="btn btn-primary" onClick={() => handleOrder(item.id, item.prize, item.name,item.image)}>
                                    Order
                                </button>
                            </div>
                        ))
                    ) : (
                        <h3>No items found</h3>
                    )}
                </div>
            </center>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filter_name: state.filterreducer.filter_name,
    table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { addorder, resetfilter, resettablenumber })(Card);
