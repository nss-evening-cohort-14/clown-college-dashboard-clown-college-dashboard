import { getAllMajors } from '../../helpers/majorHelper';

const majorsCard = (majorsInfo, userInfo) => `
<tr>
  <td>${majorsInfo.name}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#formModal" id="majors--edit--${majorsInfo.firebaseKey}">Edit</button>
    <button class="btn btn-danger" id="majors--delete--${majorsInfo.firebaseKey}">Delete</button>
  </td>` : ''}
</tr>
`;

const showAllMajors = (userInfo) => {
  getAllMajors().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Major Name</th>
            ${userInfo ? '<th scope="col">Actions</th>' : ''}
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((majorsInfo) => {
      domString += majorsCard(majorsInfo, userInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#majors--list').innerHTML = domString;
  });
};

export default showAllMajors;
