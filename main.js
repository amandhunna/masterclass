function foo(){
alert("Wish u great days ahead");
document.getElementById("victim").setAttribute("style","color:red")
//1
var courses=new Array("html","css","js");
//2
var courses1= new Array(3);
courses1[0]=1;
courses1[1]=2;
courses1[2]="nearly undefined";
//3
var courses3 = ["HTML", "CSS", "JS"];
//document.write(courses3.length);

var courses4 = courses.concat(courses3);
//document.write(courses3.length);

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
//document.write(person["age"]);
document.write("HAPPY NEW YEAR 2018")
//Outputs "46"
}
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
//setInterval(printTime, 1000);
