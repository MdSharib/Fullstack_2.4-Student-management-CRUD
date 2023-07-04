
const form = document.getElementById("my-form");
const studentInputName = document.getElementById("name");
const studentInputAge = document.getElementById("age");
const studentInputEmail = document.getElementById("email");
const studentInputGpa = document.getElementById("gpa");
const studentInputDegree = document.getElementById("degree");
const table = document.getElementById("table-body");
// const editBtn = document.getElementById("edit-btn");
const trashBtn = document.getElementById("trash-btn");
let studentDetails = [];





// editing from table
const editBtnHandler = (btnValue) => {
    const id = btnValue.value;
    // console.log(id);
    
    studentDetails.forEach((val) => {
        if(val["id"] === id){
            // console.log(val);
            row = val;
        }
    })
    console.log(row);
}



// adding into table
const inserIntoTable = () => {
    let toEnterTable = ""
    studentDetails.map((val) => {
    toEnterTable += `
                <tr>
                <td>${val['id']}</td>
                <td>${val['name']}</td>
                <td>${val["email"]}</td>
                <td>${val["age"]}</td>
                <td>${val["gpa"]}</td>
                <td>${val["degree"]} <button value=${val['id']} onClick="editBtnHandler(this)" id="edit-btn"></button> <button id="trash-btn"></button></td>
            <tr>
    `
});
   table.innerHTML = toEnterTable;
}



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
    inserIntoTable();
}


form.addEventListener('submit', formDataHandler);
// editBtn.addEventListener("click", editBtnHandler);


