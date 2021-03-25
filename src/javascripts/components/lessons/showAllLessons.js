import { getAllLessons } from '../../helpers/lessonHelper';

const lessonCard = (lessonInfo) => `
<tr>
  <td>${lessonInfo.name}</td>
</tr>
`;

const showAllLessons = () => {
  getAllLessons().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Lesson Name</th>
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((lesson) => {
      domString += lessonCard(lesson);
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
