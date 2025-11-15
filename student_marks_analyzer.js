// let students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 58 },
//   { name: "Charlie", marks: 92 },
//   { name: "David", marks: 37 },
//   { name: "Eva", marks: 76 }
// ];
// //display students
// console.log("All Students:");
// let diplay = students.forEach(function(student){
//     console.log(`${student.name} - ${student.marks}`);
// }); 

// //Calculate Total & Average Marks
// let total = students.reduce((acc, student) => acc+student.marks,0);
// let average = total/students.length;
// console.log(`Total Marks: ${total}`);
// console.log(`Average Marks: ${average.toFixed(2)}`);

// // Find Highest and Lowest Marks
// let high=students.sort((a,b)=>a.marks-b.marks )[students.length-1];
// let low=students[0];
// console.log(`Highest: ${high.name}(${high.marks})`)
// console.log(`Lowest: ${low.name}(${low.marks})`)

// // Filter Passing Students
// let pass=students.filter(i=>{return i.marks>=40})
// console.log("Students who passed:");
// pass.map(i=>{console.log(`${i.name} - ${i.marks}`)});

// // Sort Students by Marks
// let descending=students.sort((a,b)=>b.marks-a.marks)
// console.log("Students Sorted by Marks (High → Low):");
// descending.map(i=>{console.log(`${i.name} - ${i.marks}`)});

// // Display Top 3 Performers
// let top=students.sort((a,b)=>b.marks-a.marks)
// let top3=top.slice(0,3)
// top3.map(i=>{console.log(`${i.name} - ${i.marks}`)})


// //Output
// // All Students:
// Alice - 85
// Bob - 58
// Charlie - 92
// David - 37
// Eva - 76
// //Total and average marks
// Total Marks: 348
// Average Marks: 69.60
// // Find Highest and Lowest Marks
// Highest: Charlie(92)
// Lowest: David(37)
// // Students who passed:
// Bob - 58
// Eva - 76
// Alice - 85
// Charlie - 92
// // Students Sorted by Marks (High → Low):
// Charlie - 92
// Alice - 85
// Eva - 76
// Bob - 58
// David - 37
// // Display Top 3 Performers
// Charlie - 92
// Alice - 85
// Eva - 76


// // myself





