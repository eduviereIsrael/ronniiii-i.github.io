
    var title = document.querySelector("#courseName");
    var description = document.querySelector("#courseDescription");
    var code = document.querySelector("#courseCode");
    
    var courses = [];
    
    var tbody = document.getElementById('tbodyy');
    
    var type
    var index
    
    
    function displayCourses() {
        tbody.innerHTML="";
        var htmlCode = "";
    
        for (let i = 0; i < courses.length; i++) {
            htmlCode+= `<tr> <td> ${courses[i].nameOfCourse} </td> <td> ${courses[i].descriptionOfCourse} </td> <td> ${courses[i].codeOfCourse} </td> <td><button onclick='edit(${i})' class='btn edit'>Edit</button></td> <td><button onclick='del(${i})' class='btn delete'>Delete</button></td> </tr>`; 
            
        }
        return tbody.innerHTML = htmlCode;
    }
    function removeAlert() {
        alertt.classList.remove("alerting")
    }
    
    function display() {
        if (title.value !== null && description.value !== null && code.value !== null && type !== 'edit') {
            var course = {nameOfCourse: title.value, descriptionOfCourse: description.value, codeOfCourse: code.value};
            courses.push(course);
            displayCourses();
        }
        else if (type =='edit') {
            const newObj = {nameOfCourse: title.value, descriptionOfCourse: description.value, codeOfCourse: code.value};
            courses.splice(index, 1, newObj);
            displayCourses();
            var alertt = document.getElementById('alertt');
            alertt.innerHTML="Course Edited"
        }
        title.value="";
        description.value="";
        code.value="";
        var alertt = document.getElementById('alertt');
        alertt.classList.add("alerting");
        window.setTimeout(removeAlert,3000);
    }
    
    function edit(theIndex) {
            let i = theIndex;
            title.value = courses[i].nameOfCourse;
            description.value = courses[i].descriptionOfCourse;
            code.value = courses[i].codeOfCourse; 
        type = 'edit';
        index = i;
    }
    
    function del(theIndex) {
        let i = theIndex;
        courses.splice(i,1);
        displayCourses();
        var alertt = document.getElementById('alertt');
        alertt.innerHTML="Course Deleted"
        alertt.classList.add("alerting");
        window.setTimeout(removeAlert,3000);
    }
        