import React, { useState } from "react";

function StudentForm({ onSubmit, onCancel, initialData }) {
  const [student, setStudent] = useState(
    initialData || { name: "", section: "", marks: "", grade: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedStudent = { ...student, [name]: value };

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
    if (!student.name || !student.section || !student.marks) {
      alert("⚠️ Please fill all fields properly.");
      return;
    }
    onSubmit(student);
  };

  return (
    <div className="form-container" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
        {initialData ? "✏️ Edit Details" : "✨ New Entry"}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: "bold", marginLeft: "5px" }}>Full Name</label>
        <input name="name" value={student.name} onChange={handleChange} placeholder="John Doe" />
        
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "bold", marginLeft: "5px" }}>Section</label>
                <input name="section" value={student.section} onChange={handleChange} placeholder="A" />
            </div>
            <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "bold", marginLeft: "5px" }}>Marks</label>
                <input type="number" name="marks" value={student.marks} onChange={handleChange} placeholder="0-100" />
            </div>
        </div>
        
        <label style={{ fontWeight: "bold", marginLeft: "5px" }}>Calculated Grade</label>
        <input name="grade" value={student.grade} readOnly style={{ background: "#e2e8f0", cursor: "not-allowed" }} />

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button type="submit" className="btn btn-success" style={{ flex: 1 }}>Save Data</button>
          <button type="button" className="btn btn-danger" style={{ flex: 1 }} onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;