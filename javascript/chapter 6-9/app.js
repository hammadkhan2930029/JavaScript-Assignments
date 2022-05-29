// Chapter 6 to 10

// Task 1
document.write("<h3> task 1 <h3>")

var a = 10
++a

document.write("The Value of ++a is :" + a + "<br>")
document.write("Now value of a is:" + a + "<br> <br>")

var a = 10
a++

document.write("The Value of a++ is:" + a + "<br>")
a++
document.write("The Value of a is:" + a + "<br><br>")

--a
document.write("The Value of --a is:" + a + "<br>")

document.write("The Value of a is:" + a + "<br><br>")

document.write("The Value of a-- is:" + a + "<br>")
a--
document.write("The Value of is:" + a + "<br><br>")

document.write("Result:<br>The Value of a is:" + a + "<br><br>")

// task 2

var a = 2
var b = 1
var result= --a - --b + ++b + b+ 
         //  1  - 0  + 1 + 1
            //  1 + 1 + 1
//             // 3           
document.write("<h3>Task no 2 </h3><br><br>");

document.write("--a is pre decrement,the value of --a is = 1<br>");
document.write("--b is pre decrement,the value of --b is = 0<br>");
document.write("++b is pre decrement,the value of ++b is = 1<br>");
document.write("b+ is post decrement,the value of b+ is = 1 <br><br>");

document.write("The value of --a - --b + ++b + b+ is :" + result);












// task 3

var userName = prompt(" Enter Your Name ")
var msg = " Assalam O Alaikum "
alert(msg + userName + " " + "Thanks for visite my Web")

// task 4

var tableNo = prompt("Enter Table No:","5")
document.write("<h3>Table <h3>")
document.write(tableNo + "x 1 ="+ tableNo * 1 + "<br>" + tableNo + "x 2 =" +tableNo * 2 + "<br>" +
 tableNo + "x 3 =" +tableNo * 3 + "<br>"
  + tableNo + "x 4 ="+ tableNo * 4 + "<br> " 
  + tableNo + "x 5 ="+ tableNo * 5 +" <br> "+tableNo +"x 6 =" +tableNo * 6 + "<br>" +
  tableNo +"x 7 =" +tableNo * 7 + "<br>" +tableNo +"x 8 ="+ tableNo * 8 + "<br>" 
  +tableNo +"x 9 ="+ tableNo * 9 + "<br>" +tableNo +"x 10 =" +tableNo * 10 + "<br>" )

//   task 5


var subName1 =prompt("Enter your subjact name");
var subMarks1 =+prompt("Enter Obtaind Mark of this subjact");

var subName2 =prompt("Enter your subjact name");
var subMarks2 =+prompt("Enter Obtaind Mark of this subjact");

var subName3 =prompt("Enter your subjact name");
var subMarks3 =+prompt("Enter Obtaind Mark of this subjact");

var totalMarks = 100
var eachpercent1 =subMarks1 / totalMarks * 100;
var eachpercent2 =subMarks2 / totalMarks * 100;
var eachpercent3 =subMarks3 / totalMarks * 100;

var totalMarksStud=300;
var obtaindMarks= subMarks1 + subMarks2 + subMarks3;
var percentage=obtaindMarks / totalMarksStud* 100;

document.write(`<table>
<tr>
  <th>subjact</th>
  <th>Total Mark</th>
  <th>Obtaind Marks</th>
<th>percentage</th>

</tr>
<tr>

<td>${subName1}</td>
<td>${totalMarks}</td>
<td>${subMarks1}</td>
<td>${eachpercent1}%</td>

</tr>

<tr>

<td>${subName2}</td>
<td>${totalMarks}</td>
<td>${subMarks2}</td>
<td>${eachpercent2}%</td>

</tr>

<tr>

<td>${subName3}</td>
<td>${totalMarks}</td>
<td>${subMarks3}</td>
<td>${eachpercent3}%</td>

</tr>

<tr>

<td></td>
<td>${totalMarksStud}</td>
<td>${obtaindMarks}</td>
<td>${percentage}%</td>

</tr>




</table>`

)














