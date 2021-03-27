import { getAllStudents } from '../../helpers/studentHelper';

const userCard = (studentInfo, userInfo) => `
<tr>
  <td>
    <div style="background-image: url(${studentInfo.imageUrl}); height: 100px; width: 100px;"></div>
  </td>
  <td>${studentInfo.fullName}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-danger" id="students--delete--${studentInfo.firebaseKey}">Delete</button>
  </td>
  ` : ''}
</tr>
`;

const showAllStudents = (userInfo) => {
  getAllStudents().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Full Name</th>
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((student) => {
      domString += userCard(student, userInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#students--list').innerHTML = domString;
  });
};

export default showAllStudents;
