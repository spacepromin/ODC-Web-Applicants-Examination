var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["Phno"] = document.getElementById("Phno").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstName;
    var cell1 = newRow.insertCell(1);
            cell1.innerHTML = data.lastName;
    var cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.empCode;
    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.Phno;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.gender;
    var cell4 = newRow.insertCell(5);
        cell4.innerHTML = data.dob;
    var cell4 = newRow.insertCell(6);
        cell4.innerHTML = data.address;
    var cell5 = newRow.insertCell(7);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('empCode').value = '';
    document.getElementById('Phno').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('address').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('empCode').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Phno').value = selectedRow.cells[3].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[5].innerHTML;
    document.getElementById('address').value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.empCode;
    selectedRow.cells[3].innerHTML = formData.Phno;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.dob;
    selectedRow.cells[6].innerHTML = formData.address;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
