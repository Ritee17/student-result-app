import React, { useState } from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on search (Extra Feature)
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container">
      <div className="header-row">
        <h2>📋 Student List</h2>
        {/* Manual Load Button as required by PDF */}
        <button className="btn btn-primary" onClick={onLoad}>🔄 Load Data</button>
      </div>

      {/* Search Bar (Extra Feature) */}
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="btn btn-success full-width" onClick={onAdd}>+ Add New Student</button>

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
                <td>{student.name}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td style={{ fontWeight: "bold", color: student.grade === "F" ? "red" : "green" }}>
                  {student.grade}
                </td>
                <td>
                  <button className="btn-small info" onClick={() => onView(student)}>View</button>
                  <button className="btn-small edit" onClick={() => onEdit(student)}>Edit</button>
                  <button className="btn-small delete" onClick={() => onDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No students found. Click "Load Data".
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;