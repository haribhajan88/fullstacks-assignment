"use strict";

const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const cleanUsers = [];
const auditErrors = [];
console.log("=== JSON Audit ===");
for (let line = 0; line < rawData.length; line += 1) {
  debugger; // Inspect line and observe catch control flow for malformed JSON.
  try {
    const entry = JSON.parse(rawData[line]);
    if (!("user" in entry) || !("age" in entry)) throw new Error("Missing user or age key");
    const age = Number(entry.age);
    if (!Number.isFinite(age)) throw new TypeError("Age is not numeric");
    if (age < 18) { console.log(`Line ${line + 1}: skipped under-18 user ${entry.user}`); continue; }
    cleanUsers.push({ user: entry.user, age });
    console.log(`Line ${line + 1}: accepted ${entry.user}, age ${age}`);
  } catch (error) {
    auditErrors.push({ line: line + 1, error: error.message });
    console.log(`Line ${line + 1}: ERROR - ${error.message}`);
  }
}
console.log("Clean users:", cleanUsers);
console.log("Audit errors:", auditErrors);
