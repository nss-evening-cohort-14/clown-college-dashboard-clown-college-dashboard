import { getAllLessons } from '../../helpers/lessonHelper';

const lessonCard = (lessonInfo, userInfo) => `
<tr>
  <td>${lessonInfo.lesson_name}</td>
  ${userInfo ? `
  <td>
    <button class="btn btn-secondary" data-toggle="modal" data-target="#formModal" id="lessons--edit--${lessonInfo.firebaseKey}">Edit</button>
    <button class="btn btn-danger" id="lessons--delete--${lessonInfo.firebaseKey}">Delete</button>
  </td>
  ` : ''}
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
