import studentsData from "../data/students.json";
import styles from "./studentList.module.css";

function StudentList() {
  return (
    <div className={styles.studentBox}>
      <h2>List of Students</h2>
      <ul>
        {studentsData.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name}, <strong>Age:</strong>{" "}
            {student.age}, <strong>Courses:</strong>{" "}
            {student.courses.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
