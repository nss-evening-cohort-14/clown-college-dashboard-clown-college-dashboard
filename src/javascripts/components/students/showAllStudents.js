import { getAllStudents } from '../../helpers/studentHelper';

const userCard = (studentInfo, userInfo) => `
<tr>
  <td>
    <img class="person-img" src="${studentInfo.student_image}"></img>
  </td>
  <td>${studentInfo.student_name}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-secondary" data-toggle="modal"
    data-target="#formModal" id="students--edit--${studentInfo.firebaseKey}">Edit</button>
  </button>
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
            ${userInfo ? '<th scope="col">Actions</th>' : ''}
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
