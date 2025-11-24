const API_URL = "http://localhost:5000/students";

// Get all students
export const getAllStudents = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Add a new student
export const addStudent = async (student) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
};

// Update a student
export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
};

// Delete a student
export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};