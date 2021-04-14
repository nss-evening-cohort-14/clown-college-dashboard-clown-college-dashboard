import { getAllTeachers } from '../../helpers/teacherHelper';

const userCard = (teacherInfo, userInfo) => `
<tr>
  <td>
    <div style="background-image: url(${teacherInfo.teacher_image}); height: 100px; width: 100px;"></div>
  </td>
  <td>${teacherInfo.teacher_name}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#formModal" id="teachers--edit--${teacherInfo.firebaseKey}">Edit</button>
    <button class="btn btn-danger" id="teachers--delete--${teacherInfo.firebaseKey}">Delete</button>
  </td>
  ` : ''}
</tr>
`;

const showAllTeachers = (userInfo) => {
  getAllTeachers().then((resp) => {
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
    resp.forEach((teacher) => {
      domString += userCard(teacher, userInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#teachers--list').innerHTML = domString;
  });
};

export default showAllTeachers;
