import { getAllTeachers } from '../../helpers/teacherHelper';

const userCard = (teacherInfo) => `
<tr>
  <td>
    <div style="background-image: url(${teacherInfo.imageUrl}); height: 100px; width: 100px;"></div>
  </td>
  <td>${teacherInfo.fullName}</td>
</tr>
`;

const showAllTeachers = () => {
  getAllTeachers().then((resp) => {
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
    resp.forEach((teacher) => {
      domString += userCard(teacher);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#teachers--view').innerHTML = domString;
  });
};

export default showAllTeachers;
