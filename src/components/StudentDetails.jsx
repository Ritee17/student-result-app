import React from "react";

function StudentDetails({ student, onBack }) {
  return (
    <div className="details-container">
      <h2>🎓 Student Report Card</h2>
      <div className="details-card">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Marks:</strong> {student.marks} / 100</p>
        <div className="grade-badge">
            Grade: {student.grade}
        </div>
      </div>
      <button className="btn btn-primary" onClick={onBack}>⬅ Back to List</button>
    </div>
  );
}

export default StudentDetails;