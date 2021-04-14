import { getAllClasses } from '../../helpers/classHelper';

const classCard = (classInfo, userInfo) => `
<tr>
  <td>${classInfo.class_name}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#formModal" id="classes--edit--${classInfo.firebaseKey}">Edit</button>
    <button class="btn btn-danger" id="classes--delete--${classInfo.firebaseKey}">Delete</button>
  </td>` : ''}
</tr>
`;

const showAllClasses = (userInfo) => {
  getAllClasses().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Class Name</th>
            ${userInfo ? '<th scope="col">Actions</th>' : ''}
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((classInfo) => {
      domString += classCard(classInfo, userInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#classes--list').innerHTML = domString;
  });
};

export default showAllClasses;
