class Employee {
    constructor(firstName,lastName,degisnation,salary,email,mobile) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.degisnation = degisnation;
        this.salary = salary;
        this.email = email;
        this.mobile = mobile;
    }
}

const employee1 = new Employee();
function addEmployee() {
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let degisnation = document.querySelector('#degisnation').value;
    let salary  = document.querySelector('#salary').value;
    let email = document.querySelector("#email");
    let mobile = document.querySelector('#mobile').value;

    employee1.firstName = firstName;
    employee1.lastName = lastName;
    employee1.degisnation = degisnation;
    employee1.salary = salary;
    employee1.email = email;
    employee1.mobile = mobile;
}

function showEmployee() {
    let view =` <table border = '1px'>
    <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Degisnation</th>
    <th>Salary</th>
    <th>Email</th>
    <th>Mobile</th>
    </tr>
    
    <tr>
    <td>${employee1.firstName}</td>
    <td>${employee1.lastName}</td>
    <td>${employee1.degisnation}</td>
    <td>${employee1.salary}</td>
    <td>${employee1.email}</td>
    <td>${employee1.mobile}</td>
    </tr>
    </table>`;

    document.querySelector('#view').innerHTML = view;
}