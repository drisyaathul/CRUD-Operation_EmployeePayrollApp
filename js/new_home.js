window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = `
    <tr>
       <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
        <tr>
        <td><img class="profile" src="./assets/profile-images/img1.png" width="40%" height="40px" alt="profile_img-1"></td>
        <td>Narayanan Mahadevan</td>
        <td>Male</td>
        <td>
        <div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div>
        </td>      
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
        <img name="1" onclick="remove(this)" src="./assets/profile-images/delete-black-18dp.svg" alt="delete">
        <img name="1" onclick="update(this)" src="./assets/profile-images/create-black-18dp.svg" alt="edit">
        </td>
        </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}