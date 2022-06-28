var alert = document.getElementsByClassName("alert");

var title = document.getElementById("courseName").value;
var description = document.getElementById("courseDescription").value;
var code = document.getElementById("courseCode").value;

var courses = [];

var tbody = document.getElementsByTagName('tbody');

function displayCourses() {
    tbody.innerHTML="";
    var htmlCode = "";

    for (let i = 0; i < courses.length; i++) {
        htmlCode+= "<tr>" + "<td>" + courses[i].nameOfCourse + "</td>" + "<td>" + courses[i].descriptionOfCourse + "</td>" + "<td>" + courses[i].codeOfCourse + "</td>" + "<td><button class='btn btn-info edit'>Edit</button></td>" + "<td><button class='btn btn-danger delete'>Delete</button></td>" + "</tr>"; 
        
    }
    return tbody.innerHTML = htmlCode;
    
}

function display() {
    if (title && description && code ==!null) {
        var course = {nameOfCourse: title, descriptionOfCourse: description, codeOfCourse: code};
        courses.push(course);
        displayCourses();
    }
    
}

