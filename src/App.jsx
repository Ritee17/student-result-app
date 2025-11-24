import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import { getAllStudents, addStudent, deleteStudent, updateStudent } from "./services/studentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState("list"); // options: 'list', 'add', 'edit', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);

  // 1. LOAD DATA (Manual Trigger)
  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("Error loading data. Is JSON Server running?");
    }
  };

  // 2. ADD STUDENT
  const handleAddStudent = async (student) => {
    await addStudent(student);
    alert("Student Added!");
    setView("list");
  };

  // 3. UPDATE STUDENT
  const handleUpdateStudent = async (updatedData) => {
    await updateStudent(selectedStudent.id, updatedData);
    alert("Student Updated!");
    setView("list");
  };

  // 4. DELETE STUDENT
  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteStudent(id);
      alert("Student Deleted! Click Load Data to refresh.");
      // Simple way to remove from screen immediately
      setStudents(students.filter(s => s.id !== id)); 
    }
  };

  // Navigation Helpers
  const openEdit = (student) => { setSelectedStudent(student); setView("edit"); };
  const openDetails = (student) => { setSelectedStudent(student); setView("details"); };

  return (
    <div className="app-container">
      <h1>🏫 Student Result Management</h1>
      
      {view === "list" && (
        <StudentList
          students={students}
          onLoad={handleLoadStudents}
          onAdd={() => setView("add")}
          onEdit={openEdit}
          onDelete={handleDeleteStudent}
          onView={openDetails}
        />
      )}

      {view === "add" && (
        <StudentForm onSubmit={handleAddStudent} onCancel={() => setView("list")} />
      )}

      {view === "edit" && (
        <StudentForm initialData={selectedStudent} onSubmit={handleUpdateStudent} onCancel={() => setView("list")} />
      )}

      {view === "details" && (
        <StudentDetails student={selectedStudent} onBack={() => setView("list")} />
      )}
    </div>
  );
}

export default App;