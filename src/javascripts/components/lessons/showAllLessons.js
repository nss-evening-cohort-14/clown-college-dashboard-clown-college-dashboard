import { getAllLessons } from '../../helpers/lessonHelper';

const lessonCard = (lessonInfo, userInfo) => `
<tr>
  <td>${lessonInfo.name}</td>
  ${userInfo ? `<td><button class="btn btn-success" data-toggle="modal" data-target="#formModal" id="lessons--edit--${lessonInfo.firebaseKey}">Edit</button></td>` : ''}
</tr>
`;

const showAllLessons = (userInfo) => {
  getAllLessons().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Lesson Name</th>
            ${userInfo ? '<th scope="col">Actions</th>' : ''}
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((lesson) => {
      domString += lessonCard(lesson, userInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#lessons--list').innerHTML = domString;
  });
};

export default showAllLessons;
