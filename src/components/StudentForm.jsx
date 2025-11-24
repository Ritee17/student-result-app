import React, { useState } from "react";

function StudentForm({ onSubmit, onCancel, initialData }) {
  const [student, setStudent] = useState(
    initialData || { name: "", section: "", marks: "", grade: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedStudent = { ...student, [name]: value };

    // EXTRA FEATURE: Auto-calculate Grade
    if (name === "marks") {
      const marks = parseInt(value) || 0;
      let grade = "F";
      if (marks >= 90) grade = "A+";
      else if (marks >= 80) grade = "A";
      else if (marks >= 70) grade = "B";
      else if (marks >= 60) grade = "C";
      else if (marks >= 40) grade = "D";
      updatedStudent.grade = grade;
    }
    setStudent(updatedStudent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EXTRA FEATURE: Validation
    if (!student.name || !student.section || !student.marks) {
      alert("⚠️ Please fill all fields properly.");
      return;
    }
    onSubmit(student);
  };

  return (
    <div className="form-container">
      <h2>{initialData ? "✏️ Edit Student" : "➕ Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input name="name" value={student.name} onChange={handleChange} placeholder="Enter Name" />
        
        <label>Section</label>
        <input name="section" value={student.section} onChange={handleChange} placeholder="e.g. A" />
        
        <label>Marks (0-100)</label>
        <input type="number" name="marks" value={student.marks} onChange={handleChange} />
        
        <label>Grade (Auto-Generated)</label>
        <input name="grade" value={student.grade} readOnly className="read-only" />

        <div className="button-group">
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;