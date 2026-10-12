// Q2: Make one example of each data type and show its type.
const name = "Mina";
const age = 21;
const isStudent = true;
const hobbies = ["reading", "music"];
const person = { city: "Pune" };
const middleName = null;
let nickname;

// Array.isArray() is used for arrays because typeof says "object" for them.
console.table([
  { label: "Name", value: name, type: typeof name },
  { label: "Age", value: age, type: typeof age },
  { label: "Student", value: isStudent, type: typeof isStudent },
  { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "Person", value: person, type: typeof person },
  { label: "Middle name", value: middleName, type: "null" },
  { label: "Nickname", value: nickname, type: typeof nickname },
]);
