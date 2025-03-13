import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders = ({ orders = [] }) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Header with Home Button */}
            <header 
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 30px",
                    backgroundColor: "#222", // Solid background to prevent merging
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000
                }}
            >
                <h1 style={{ color: "white", margin: 0, fontSize: "24px" }}>Orders</h1>
                <button 
                    onClick={() => navigate("/")} 
                    style={{
                        padding: "8px 16px",
                        fontSize: "14px",
                        backgroundColor: "skyblue",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    Home
                </button>
            </header>

            {/* Page Content */}
            <div 
                style={{ 
                    marginTop: "80px", // Push content below header
                    minHeight: "calc(100vh - 80px)", 
                    backgroundImage: "url('/orders.png')", // Background applies ONLY to this section
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
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
                                    background: "rgba(255, 255, 255, 0.9)",
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
                                    onError={(e) => e.target.src = "/default.jpg"}
                                />
                                <h3 style={{ margin: "10px 0" }}>{order.name || "Unknown Item"}</h3>
                                <p style={{ fontSize: "16px", color: "#555" }}>Price: ₹{order.prize || "0"}</p>
                                <p style={{ fontWeight: "bold" }}>Table: {order.table_number || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ fontSize: "18px", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                        No orders yet
                    </p>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    orders: state.orderreducer || []
});

export default connect(mapStateToProps)(Orders);
