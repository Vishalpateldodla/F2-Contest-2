let employeeArray = []
let id = 0

function addEmployee() {
  event.preventDefault()
  let name = document.getElementById("name").value
  let profession = document.getElementById("profession").value
  let age = document.getElementById("age").value
  if (!name || !profession || !age) {
    document.getElementById("error").innerHTML = "Error: Please Make sure All the fields are filled before adding in an employee"
    return
  }
  document.getElementById("error").innerHTML = ""
  document.getElementById("success").innerHTML = "Success: Employee added!"
  let employee = { id: ++id, name: name, profession: profession, age: age }
  employeeArray.push(employee)
  displayEmployees()
}

function deleteEmployee(index) {
  employeeArray.splice(index, 1)
  displayEmployees()
}

function displayEmployees() {
  let employeeList = document.getElementById("employeeList")
  employeeList.innerHTML = ""
  employeeArray.forEach(function (employee, index) {
    employeeList.innerHTML += `
      <tr>
        <td width="50">${employee.id}.</td>
        <td width="125">Name: ${employee.name}</td>
        <td width="125">Profession: ${employee.profession}</td>
        <td width="100">Age: ${employee.age}</td>
        <td width="100" border-left=0px><button onclick="deleteEmployee(${index})" style=" border-radius:20px">Delete User</button></td>
      </tr>
    `
  })
}
