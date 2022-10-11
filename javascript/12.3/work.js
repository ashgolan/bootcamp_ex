const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

const findPerson = function (kindOfPerson, id) {
  return school[kindOfPerson].filter((per) => per.id === id);
};

console.log(findPerson("students", 11));
console.log(findPerson("teachers", 2));

console.log("----------------- 2 ------------------");

const assignStudent = function (studentId, subject) {
  const teachers = school.teachers.filter((teacher) =>
    teacher.subjects.includes(subject)
  );
  const teacherFounded = teachers.find((t) => t.capacityLeft > 0);
  if (teacherFounded !== undefined) {
    teacherFounded.students.push(studentId);
    teacherFounded.capacityLeft--;
    console.log(teacherFounded);
  } else {
    console.log(`Sorry, no available teachers left`);
  }
};

assignStudent(13, "history");
assignStudent(11, "history");
assignStudent(12, "history");

console.log("---------------- 3 -------------------");

const assignTeachersSubject = function (teacherId, newSubject) {
  const teacher = school.teachers.find((t) => t.id === teacherId);
  if (!teacher.subjects.includes(newSubject)) teacher.subjects.push(newSubject);
};

assignTeachersSubject(2, "Math");

console.log("-----------------------------------");
