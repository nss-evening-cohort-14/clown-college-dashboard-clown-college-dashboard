import { getAllClasses } from '../../helpers/classHelper';

const classCard = (classInfo) => `
<tr>
  <td>${classInfo.name}</td>
</tr>
`;

const showAllClasses = () => {
  getAllClasses().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Class Name</th>
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((classInfo) => {
      domString += classCard(classInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#classes--view').innerHTML = domString;
  });
};

export default showAllClasses;
