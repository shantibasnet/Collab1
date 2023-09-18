import React from "react";
import { useParams } from "react-router-dom";

function StudentDetails({ studentsData }) {
  const { studentId } = useParams();

  const student = studentsData.find((student) => student.id === studentId);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Courses:</strong> {student.courses.join(", ")}
      </p>
    </div>
  );
}

export default StudentDetails;
