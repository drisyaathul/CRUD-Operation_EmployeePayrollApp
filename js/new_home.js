window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;
    let innerHtml = '${headerHtml}';
    let employeePayrollDataList = createEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollDataList){
        innerHtml = `${innerHtml}
        <tr>
        <td><img class="profile" src="${employeePayrollData._profilepic}" alt=""></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>      
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="./assets/profile-images/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="./assets/profile-images/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
        </tr>`;
    }
    document.querySelector('#table-isplay').innerHTML = innerHtml;
}
//UC5:
const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml;
}
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Drisya',
        _gender: 'Female',
        _department: [
          'Engineer'
        ],
        _salary: 450000,
        _startDate: '20 Jul 2016',
        _note: 'Test',
        _id: new Date().getTime(),
        _profileImage: './assets/profile-images/img4.png' 
      },
      {
        _name: 'Karthik',
        _gender: 'Male',
        _department: [
          'Engineer'
        ],
        _salary: 400000,
        _startDate: '02 Mar 2020',
        _note: 'Test to JSON',
        _id: new Date().getTime(),
        _profileImage: './assets/profile-images/img3.png'
      }
    ];
    return localStorage.getItem("employeePayrollList");
}