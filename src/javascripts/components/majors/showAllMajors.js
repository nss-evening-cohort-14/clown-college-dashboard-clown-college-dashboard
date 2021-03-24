import { getAllMajors } from '../../helpers/majorHelper';

const majorsCard = (majorsInfo) => `
<tr>
  <td>${majorsInfo.name}</td>
</tr>
`;

const showAllMajors = () => {
  getAllMajors().then((resp) => {
    let domString = `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Major Name</th>
          </tr>
        </thead>
        <tbody>
    `;
    resp.forEach((majorsInfo) => {
      domString += majorsCard(majorsInfo);
    });

    domString += `
        </tbody>
      </table>
    </div>
    `;

    document.querySelector('#majors--view').innerHTML = domString;
  });
};

export default showAllMajors;
