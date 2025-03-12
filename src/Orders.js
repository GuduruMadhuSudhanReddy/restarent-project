import React from "react";
import { connect } from "react-redux";

const Orders = ({ orders = [] }) => {
    console.log("Orders received in component:", orders); // Debugging

    return (
        <div 
            style={{ 
                minHeight: "100vh", 
                backgroundImage: "url('/orders.png')",  // ✅ Change this to your background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h2 style={{ textAlign: "center", color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                Your Orders
            </h2>
            {orders.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {orders.map((order, index) => (
                        <div 
                            key={index} 
                            style={{
                                width: "250px",
                                margin: "15px",
                                padding: "15px",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                textAlign: "center",
                                background: "rgba(255, 255, 255, 0.9)", // ✅ Light background to contrast with text
                                backdropFilter: "blur(5px)"
                            }}
                        >
                            <img 
                                src={order.image || "/default.jpg"} 
                                alt={order.name || "Unknown Item"}
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }}
                                onError={(e) => e.target.src = "/default.jpg"} // ✅ Fallback if image not found
                            />
                            <h3 style={{ margin: "10px 0" }}>{order.name || "Unknown Item"}</h3>
                            <p style={{ fontSize: "16px", color: "#555" }}>Price: ₹{order.prize || "0"}</p>
                            <p style={{ fontWeight: "bold" }}>Table: {order.table_number || "N/A"}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: "center", fontSize: "18px", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                    No orders yet
                </p>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    orders: state.orderreducer || []  // Ensure it's always an array
});

export default connect(mapStateToProps)(Orders);
