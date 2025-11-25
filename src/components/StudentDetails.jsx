import React from "react";

function StudentDetails({ student, onBack }) {
  return (
    <div className="details-container" style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
      
      {/* The ID Card */}
      <div style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
          borderRadius: "20px", 
          padding: "40px", 
          color: "white",
          boxShadow: "0 20px 40px rgba(118, 75, 162, 0.4)",
          marginBottom: "40px",
          position: "relative",
          overflow: "hidden"
      }}>
        {/* Decorative Circles */}
        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "150px", height: "150px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
        <div style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "100px", height: "100px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>

        <h2 style={{ margin: "0 0 10px 0", fontSize: "2rem" }}>{student.name}</h2>
        <p style={{ margin: "0", opacity: "0.8", letterSpacing: "1px", textTransform: "uppercase" }}>Section {student.section} • ID #{student.id}</p>
        
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "30px" }}>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "0.9rem", opacity: "0.8" }}>MARKS</span>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{student.marks}</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.3)" }}></div>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "0.9rem", opacity: "0.8" }}>GRADE</span>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{student.grade}</div>
            </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onBack} style={{ width: "100%", background: "white", color: "#764ba2" }}>
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

export default StudentDetails;