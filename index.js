
const form = document.getElementById("my-form");
const studentInputName = document.getElementById("name");
const studentInputAge = document.getElementById("age");
const studentInputEmail = document.getElementById("email");
const studentInputGpa = document.getElementById("gpa");
const studentInputDegree = document.getElementById("degree");
let studentDetails = [];





// capturing student details

function formDataHandler(ev){
    ev.preventDefault();
    const studentName = studentInputName.value;
    const studentAge = studentInputAge.value;
    const studentEmail = studentInputEmail.value;
    const studentGpa = studentInputGpa.value;
    const studentDegree = studentInputDegree.value;
    if(studentAge <5 || studentAge > 100){
        alert("please enter valid age!!")
        return;
    }
    let id = "id" + Math.random().toString(16).slice(2);

    const details = {
        id: id,
        name: studentName,
        email: studentEmail,
        gpa: studentGpa,
        age: studentAge,
        degree: studentDegree,
    }
    studentDetails.push(details);
    studentInputName.value = "";
    studentInputAge.value = "";
    studentInputEmail.value = "";
    studentInputGpa.value = "";
    studentInputDegree.value = "";
    console.log(studentDetails);
}


form.addEventListener('submit', formDataHandler);



