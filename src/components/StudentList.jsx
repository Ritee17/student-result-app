import React, { useState } from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeClass = (grade) => {
    if (grade === "F" || grade === "D") return "grade-pill grade-B"; 
    if (grade === "A" || grade === "A+") return "grade-pill grade-A"; 
    return "grade-pill grade-C"; 
  };

  return (
    <div className="card-container">
      {/* HEADER SECTION UPDATED */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
        {/* Changed Text, Emoji, and Removed Bold/Gradient styles */}
        <h2 style={{ 
            margin: 0, 
            fontSize: "1.8rem", 
            color: "#334155",  /* Simple Dark Grey color */
            fontWeight: "500", /* Not Bold (400-500 is normal) */
            letterSpacing: "0.5px"
        }}>
          📋 Students List
        </h2>
        
        <button className="btn btn-primary" onClick={onLoad}>Sync Data 🔄</button>
      </div>

      <input
        type="text"
        placeholder="🔍  Search for a student..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ borderRadius: "50px", paddingLeft: "25px", marginBottom: "30px" }}
      />

      <button className="btn btn-success" style={{ width: "100%", marginBottom: "20px" }} onClick={onAdd}>
        + Add New Student
      </button>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td style={{ fontWeight: "600", fontSize: "1rem", color: "#1e293b" }}>{student.name}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td><span className={getBadgeClass(student.grade)}>{student.grade}</span></td>
                <td>
                  <button className="btn btn-small btn-primary" onClick={() => onView(student)}>View</button>
                  <button className="btn btn-small" style={{ background: "#fbbf24", color: "#fff" }} onClick={() => onEdit(student)}>Edit</button>
                  <button className="btn btn-small btn-danger" onClick={() => onDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" style={{ textAlign: "center", color: "#888" }}>No students found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;