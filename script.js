// // Question:1
// var result = "Result:";
// document.write(`${result}<br/>`);
// var a = 10;
// document.write(`The value of a is: ${a}<br/>`);
// var newA = ++a;
// console.log(newA);
// document.write(`The value of a after ++a is: ${newA}<br/>`);
// document.write(`Now the value of a is: ${a}<br/>`);

// var aValueAfterIncrement = a++;
// document.write(`The value of a++ is: ${aValueAfterIncrement}<br/>`);
// document.write(`Now the value of a is: ${a}<br/>`);

// var abeforedecreament = --a;
// document.write(`The value of --a is: ${abeforedecreament}<br/>`);
// document.write(`Now the value of a is: ${a}<br/>`);

// var aafterdecreament = a--;
// document.write(`The value of a-- is: ${aafterdecreament}<br/>`);
// document.write(`Now the value of a is ${a}<br/>`);

// // question2
// var a = 2;
// var b = 1;
// var  newa = --a;
// console.log(newa);
// document.write(`a is: ${newa}<br/>`);
// var ab =--a - --b;
// console.log(ab);
// var newab = --a - --b + ++b;
// console.log(newab);
// var finalresult =--a - --b + ++b;
// console.log(finalresult);
// var newb = --b;
// console.log(newb);
// document.write(`b is:${newb}`);
// document(`${finalresult}`);

// Question3
// var inputname = prompt("please enter your name");
// var greet = (`Hello ${inputname}!How are you?<br/>`);
// document.write(greet);
// // Question4 and 5
// var table = "Table:<br/>";
// document.write(table);
// var tableinput =prompt("Enter number");
// var num = parseInt(tableinput)|| 5;
// document.write(`${num}x1 = ${num*1}<br/>`);
// document.write(`${num}x2 = ${num*2}<br/>`);
// document.write(`${num}x3 = ${num*3}<br/>`);
// document.write(`${num}x4 = ${num*4}<br/>`);
// document.write(`${num}x5 = ${num*5}<br/>`);
// document.write(`${num}x6 = ${num*6}<br/>`);
// document.write(`${num}x7 = ${num*7}<br/>`);
// document.write(`${num}x8 = ${num*8}<br/>`);
// document.write(`${num}x9 = ${num*9}<br/>`);
// document.write(`${num}x10 = ${num*10}<br/>`);

    // Question6
 // a) Take three subjects name from user and store them in 3 different variables.
 let subject1 = prompt("Enter first subject name:");
 let subject2 = prompt("Enter second subject name:");
 let subject3 = prompt("Enter third subject name:");
 
 // b) Total marks for each subject is 100, store it in another variable.
 let totalMarks = 100;
 
 // c) Take obtained marks for first subject from user and stored it in different variable.
 let marks1 = parseInt(prompt(`Enter marks for ${subject1}:`));
 
 // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
 let marks2 = parseInt(prompt(`Enter marks for ${subject2}:`));
 let marks3 = parseInt(prompt(`Enter marks for ${subject3}:`));
 
 // e) Now calculate total marks and percentage and show the result in browser like this.
 let totalObtainedMarks = marks1 + marks2 + marks3;
 let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
 
 // Create a table to display the results
 let table = `
   <table>
     <tr>
       <th>Subject</th>
       <th>Marks</th>
     </tr>
     <tr>
       <td>${subject1}</td>
       <td>${marks1}</td>
     </tr>
     <tr>
       <td>${subject2}</td>
       <td>${marks2}</td>
     </tr>
     <tr>
       <td>${subject3}</td>
       <td>${marks3}</td>
     </tr>
     <tr>
       <th>Total</th>
       <th>${totalObtainedMarks}</th>
     </tr>
     <tr>
       <th>Percentage</th>
       <th>${percentage.toFixed(2)}%</th>
     </tr>
   </table>
 `;
 
 // Display the table in the browser
 document.write(table);