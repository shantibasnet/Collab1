import coursesData from "../data/courses.json";
import styles from "./courseList.module.css";
import React, { useState } from "react";

function CourseList() {
  const [filter, setFilter] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.courseBox}>
      <h2>List of Courses</h2>
      <input
        type="text"
        placeholder="Filter by Instructor"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredCourses.map((course, index) => (
          <li key={index}>
            <strong>Course Name:</strong> {course.name} |{" "}
            <strong>Instructor:</strong> {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;

//maps over coursedata array and renders each course in UL
